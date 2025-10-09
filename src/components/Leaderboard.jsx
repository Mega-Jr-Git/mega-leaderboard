import { useContext } from "react";
import { LeaderboardContext } from "../context/LeaderboardContext";
import Player from "./Player";

function Leaderboard() {
    const {sortedPlayers} = useContext(LeaderboardContext)
    return(
        <>
        <div className="bg-neutral-900 rounded-[8px] md:rounded-2xl lg:p-5 p-3">
            <ul className="flex flex-col gap-2 md:gap-4">
                {sortedPlayers.map((player, index) => {
                    return(
                        <Player key={player.id} name={player.name} heart={player.heart} index={index + 1}/>
                    )
            })}
            </ul>
        </div>
        </>
    )
}

export default Leaderboard;