import heartImg from "../assets/icons/heart.png";
import { PCD_RULES } from "../data/pcdConfig";
import AttendanceBadges from "./AttendanceBadges";

function Player({ index, player }) {
  const { name, heart } = player;
  const maxLives = PCD_RULES.maxLives;

  // No celular: posição | nome | vidas, e os selos de presença numa 2ª linha.
  // Do md pra cima: os selos ficam embaixo do nome, com posição e vidas ocupando a altura toda.
  return (
    <li
      className="grid grid-cols-[auto_1fr_auto] items-center gap-x-2 md:gap-x-3 gap-y-2 bg-white p-2 lg:p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Posição */}
      <div
        className="md:col-start-1 md:row-start-1 md:row-span-2 bg-black border-4 border-yellow-300 aspect-square w-12 h-12 lg:w-20 lg:h-20
                    rounded-xl flex justify-center items-center shadow-inner"
      >
        <p className="text-yellow-400 font-bold text-lg md:text-3xl">
          {index < 10 ? `0${index}` : index}
        </p>
      </div>

      {/* Nome */}
      <p className="min-w-0 [overflow-wrap:anywhere] md:col-start-2 md:row-start-1 md:self-end text-black font-semibold text-sm md:text-2xl">
        {name}
      </p>

      {/* Vidas: corações perdidos aparecem apagados */}
      <div
        role="img"
        aria-label={`${heart} de ${maxLives} vidas`}
        className="md:col-start-3 md:row-start-1 md:row-span-2 flex items-center gap-1 md:gap-2 lg:gap-4"
      >
        {Array.from({ length: maxLives }, (_, i) => (
          <img
            key={i}
            src={heartImg}
            alt=""
            className={`h-6 w-6 lg:h-10 lg:w-10 ${i < heart ? "" : "grayscale opacity-20"}`}
          />
        ))}
      </div>

      {/* Presença interna e externa */}
      <AttendanceBadges
        player={player}
        className="col-span-3 md:col-span-1 md:col-start-2 md:row-start-2 md:self-start"
      />
    </li>
  );
}

export default Player;
