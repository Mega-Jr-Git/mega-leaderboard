import heartImg from "../assets/icons/heart.png";
import starImg from "../assets/icons/star.png";
import { PCD_RULES, SEMESTER } from "../data/pcdConfig";
import { formatDateBR } from "../utils/pcd";
import PixelCalendar from "./PixelCalendar";

function LegendItem({ icon, title, children }) {
  return (
    <li className="flex items-start gap-3 rounded-2xl bg-neutral-900 p-3 lg:p-5">
      <div className="shrink-0 bg-black border-4 border-yellow-300 rounded-xl w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center">
        {icon}
      </div>
      <div>
        <h3 className="text-yellow-300 uppercase text-base lg:text-2xl">{title}</h3>
        <p className="text-neutral-200 text-sm lg:text-lg leading-snug mt-1">{children}</p>
      </div>
    </li>
  );
}

function PcdLegend() {
  const { maxLives, maxJustifiedAbsences, minExternalEvents } = PCD_RULES;

  return (
    <section className="mb-4 lg:mb-8">
      <h2 className="text-white text-2xl lg:text-5xl mb-3 lg:mb-5">PCD: COMO FUNCIONA</h2>

      <ul className="grid gap-3 lg:gap-5 md:grid-cols-3">
        <LegendItem title="Vidas" icon={<img src={heartImg} alt="" className="w-8 lg:w-10" />}>
          Cada membro começa com {maxLives} vidas. Cada strike aprovado pela gestão remove 1.
        </LegendItem>

        <LegendItem
          title="Presença interna"
          icon={<PixelCalendar className="w-7 lg:w-9 text-yellow-300" />}
        >
          Até {maxJustifiedAbsences} faltas justificadas em reuniões por ano. A{" "}
          {maxJustifiedAbsences + 1}ª falta gera desligamento.
        </LegendItem>

        <LegendItem title="Presença externa" icon={<img src={starImg} alt="" className="w-8 lg:w-10" />}>
          Pelo menos {minExternalEvents} evento externo por semestre. Semestre {SEMESTER.label}: até{" "}
          {formatDateBR(SEMESTER.end)}.
        </LegendItem>
      </ul>

      <p className="text-neutral-400 text-xs lg:text-base mt-3 lg:mt-5">
        Aqui aparecem só as quantidades. Os motivos ficam restritos ao membro e à gestão.
      </p>
    </section>
  );
}

export default PcdLegend;
