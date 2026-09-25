// Regras do PCD (Plano de Controle de Desempenho) usadas pelo leaderboard.
// Se o PCD mudar, é aqui que os limites são ajustados.
export const PCD_RULES = {
  // Pilar 1 – Sistema de Strikes e Vidas: cada membro começa com 3 vidas.
  maxLives: 3,

  // Pilar 2 – Presença Interna: até 3 faltas justificadas por ano.
  // A 4ª falta resulta em desligamento automático.
  maxJustifiedAbsences: 3,

  // Pilar 3 – Presença Externa: mínimo de eventos externos por semestre.
  minExternalEvents: 1,
};

// Semestre em andamento (usado na Presença Externa).
// A cada novo semestre: atualize `label` e `end` e zere `externalEvents` em players.js.
export const SEMESTER = {
  label: "2026.2",
  end: "2026-12-31", // último dia para cumprir o evento externo (AAAA-MM-DD)
};
