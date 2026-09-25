import { PCD_RULES, SEMESTER } from "../data/pcdConfig";

// Garante um número inteiro >= 0 (aceita undefined, texto ou valores quebrados vindos de players.js)
const toCount = (value) => Math.max(0, Math.floor(Number(value) || 0));

// "2026-12-31" -> "31/12/2026" (sem passar por Date, para não sofrer com fuso horário)
export const formatDateBR = (isoDate) => isoDate.split("-").reverse().join("/");

/**
 * Situação da Presença Interna:
 *  ok       -> nenhuma falta
 *  warn     -> usou parte das faltas permitidas
 *  limit    -> usou todas as faltas permitidas (a próxima gera desligamento)
 *  exceeded -> passou do limite (4ª falta ou mais: desligamento)
 */
export function getAbsenceStatus(absences, max = PCD_RULES.maxJustifiedAbsences) {
  if (absences > max) return "exceeded";
  if (absences === max) return "limit";
  if (absences > 0) return "warn";
  return "ok";
}

/**
 * Situação da Presença Externa no semestre:
 *  done    -> já participou de eventos suficientes
 *  pending -> ainda não participou, mas o semestre não acabou
 *  missed  -> o semestre acabou sem participação
 */
export function getExternalStatus(events, now = new Date()) {
  if (events >= PCD_RULES.minExternalEvents) return "done";
  const deadline = new Date(`${SEMESTER.end}T23:59:59`);
  return now > deadline ? "missed" : "pending";
}

// Converte o registro "cru" de players.js no objeto usado pela interface
export function buildPlayer(raw, now = new Date()) {
  const absences = toCount(raw.absences);
  const externalEvents = toCount(raw.externalEvents);

  return {
    id: raw.id,
    name: raw.name,
    heart: Math.min(toCount(raw.heart), PCD_RULES.maxLives),
    absences,
    absenceStatus: getAbsenceStatus(absences),
    externalEvents,
    externalStatus: getExternalStatus(externalEvents, now),
  };
}

/**
 * Ordem do ranking:
 *  1. Mais vidas primeiro (é a "pontuação" principal do PCD)
 *  2. Empate -> menos faltas internas primeiro
 *  3. Empate -> quem já cumpriu a presença externa vem antes
 *  4. Empate -> ordem alfabética
 * (Para voltar ao desempate só alfabético, apague os critérios 2 e 3.)
 */
export function comparePlayers(a, b) {
  if (a.heart !== b.heart) return b.heart - a.heart;

  if (a.absences !== b.absences) return a.absences - b.absences;

  const aDone = a.externalStatus === "done";
  const bDone = b.externalStatus === "done";
  if (aDone !== bDone) return aDone ? -1 : 1;

  return a.name.localeCompare(b.name);
}

export function rankPlayers(rawPlayers, now = new Date()) {
  return rawPlayers.map((raw) => buildPlayer(raw, now)).sort(comparePlayers);
}
