import { createContext, useMemo } from "react";
import players from "../data/players";
import { rankPlayers } from "../utils/pcd";

export const LeaderboardContext = createContext();

function LeaderboardProvider({ children }) {
  // Aplica as regras do PCD (vidas, faltas internas, evento externo) e ordena o ranking.
  // A ordem de desempate está documentada em utils/pcd.js.
  const value = useMemo(() => ({ sortedPlayers: rankPlayers(players) }), []);

  return (
    <LeaderboardContext.Provider value={value}>
      {children}
    </LeaderboardContext.Provider>
  );
}

export default LeaderboardProvider;
