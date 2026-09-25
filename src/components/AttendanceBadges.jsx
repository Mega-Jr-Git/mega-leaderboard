import starImg from "../assets/icons/star.png";
import { PCD_RULES, SEMESTER } from "../data/pcdConfig";
import { formatDateBR } from "../utils/pcd";

const chipBase =
  "inline-flex items-center gap-2 rounded-md border-2 px-2 py-1 leading-none uppercase " +
  "text-xs md:text-sm lg:text-base";

// ---------- Presença Interna (faltas justificadas) ----------

const ABSENCE_STYLE = {
  ok: { chip: "bg-neutral-100 border-neutral-300 text-neutral-600", pip: "" },
  warn: { chip: "bg-yellow-100 border-yellow-400 text-black", pip: "bg-yellow-400" },
  limit: { chip: "bg-red-100 border-red-500 text-red-700", pip: "bg-red-500" },
  exceeded: { chip: "bg-red-100 border-red-500 text-red-700", pip: "bg-red-500" },
};

const ABSENCE_HINT = {
  ok: "",
  warn: "",
  limit: " (limite atingido: a próxima falta gera desligamento)",
  exceeded: " (limite excedido)",
};

function AbsenceBadge({ absences, status }) {
  const max = PCD_RULES.maxJustifiedAbsences;
  const style = ABSENCE_STYLE[status];
  const label = `Faltas justificadas em reuniões: ${absences} de ${max}${ABSENCE_HINT[status]}`;

  return (
    <span role="img" aria-label={label} title={label} className={`${chipBase} ${style.chip}`}>
      <span>Faltas</span>
      {/* um quadradinho por falta permitida; preenchido = falta usada */}
      <span className="flex gap-0.5">
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 lg:h-3.5 lg:w-3.5 border-2 border-black ${
              i < absences ? style.pip : "bg-white"
            }`}
          />
        ))}
      </span>
      <span>
        {absences}/{max}
      </span>
    </span>
  );
}

// ---------- Presença Externa (evento no semestre) ----------

const EXTERNAL_STYLE = {
  done: { chip: "bg-black border-yellow-300 text-yellow-300", star: "", text: "Cumprido" },
  pending: {
    chip: "bg-neutral-100 border-neutral-300 text-neutral-600",
    star: "grayscale opacity-50",
    text: "Pendente",
  },
  missed: {
    chip: "bg-red-100 border-red-500 text-red-700",
    star: "grayscale opacity-60",
    text: "Não cumprido",
  },
};

function ExternalBadge({ status }) {
  const style = EXTERNAL_STYLE[status];
  const label = {
    done: `Presença externa cumprida no semestre ${SEMESTER.label}`,
    pending: `Presença externa pendente: prazo até ${formatDateBR(SEMESTER.end)}`,
    missed: `Presença externa não cumprida no semestre ${SEMESTER.label}`,
  }[status];

  return (
    <span role="img" aria-label={label} title={label} className={`${chipBase} ${style.chip}`}>
      <img src={starImg} alt="" className={`h-4 w-4 lg:h-5 lg:w-5 ${style.star}`} />
      <span>Externo: {style.text}</span>
    </span>
  );
}

// ---------- Conjunto exibido em cada linha do ranking ----------

function AttendanceBadges({ player, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <AbsenceBadge absences={player.absences} status={player.absenceStatus} />
      <ExternalBadge status={player.externalStatus} />
    </div>
  );
}

export default AttendanceBadges;
