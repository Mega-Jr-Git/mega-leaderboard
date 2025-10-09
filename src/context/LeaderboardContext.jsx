import { createContext } from "react";
import players from "../data/players";

export const LeaderboardContext = createContext();

function LeaderboardProvider({ children }) {
  const sortedPlayers = [...players].sort((playerX, playerY) => {
    // Primeiro compara pelo número de corações (decrescente)
    const heartDiff = playerY.heart - playerX.heart;
    if (heartDiff !== 0) return heartDiff;

    // Se tiverem o mesmo número de corações, ordena pelo nome (A-Z)
    return playerX.name.localeCompare(playerY.name);
  });

  console.log(sortedPlayers);

  return (
    <LeaderboardContext.Provider value={{ sortedPlayers }}>
      {children}
    </LeaderboardContext.Provider>
  );
}

export default LeaderboardProvider;