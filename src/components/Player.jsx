import heartImg from "../assets/icons/heart.png";

function Player({ index, name, heart }) {
  const heartsCount = Math.max(0, Math.floor(Number(heart) || 0));

  return (
    <li
      className="flex justify-between items-center bg-white p-2 lg:p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Player Info */}
      <div className="flex items-center gap-3">
        <div
          className="bg-black border-4 border-yellow-300 aspect-square w-12 h-12 lg:w-20 lg:h-20 
                        rounded-xl flex justify-center items-center shadow-inner"
        >
          <p className="text-yellow-400 font-bold text-lg md:text-3xl">
            {index < 10 ? `0${index}` : index}
          </p>
        </div>
        <p className="text-black font-semibold text-sm md:text-2xl">{name}</p>
      </div>

      {/* Hearts */}
      <div className="flex items-center gap-2 lg:gap-4">
        {Array.from({ length: heartsCount }, (_, i) => (
          <img
            key={i}
            src={heartImg}
            alt="heart"
            className="h-6 w-6 lg:h-10 lg:w-10"
          />
        ))}
      </div>
    </li>
  );
}

export default Player;
