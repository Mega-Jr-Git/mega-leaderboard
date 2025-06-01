import { createContext } from "react";
import players from "../data/players"

export const LeaderboardContext = createContext();
function LeaderboardProvider({children}){
    const sortedPlayers = [...players].sort((playerX, playerY) => {
        return playerY.meducks - playerX.meducks})
    console.log(sortedPlayers)
    return(
        <LeaderboardContext.Provider value={{sortedPlayers}}>
            {children}
        </LeaderboardContext.Provider>
    )
}
export default LeaderboardProvider;