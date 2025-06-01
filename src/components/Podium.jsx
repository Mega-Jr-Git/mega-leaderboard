import { useContext } from "react";
import { LeaderboardContext } from "../context/LeaderboardContext";
import exemplo from "../assets/imgs/players/exemplo.png"

function Podium(){
    const {sortedPlayers} = useContext(LeaderboardContext)

    return(
        <>
        <div className="my-5 ">
                <ul className="h-40 lg:h-60 flex justify-center items-end w-full gap-4">
            <li key={sortedPlayers[0].id} className="text-white border-4 rounded-2xl border-white  overflow-hidden">
                <img  className="w-30 lg:w-40" src={exemplo} alt="" />
            </li>
            <li key={sortedPlayers[1].id} className="text-white border-4 rounded-2xl border-white  overflow-hidden self-start">
                <img  className="w-30 lg:w-40" src={exemplo} alt="" />
            </li>
            <li key={sortedPlayers[2].id} className="text-white border-4 rounded-2xl border-white  overflow-hidden">
                <img className="w-30 lg:w-40" src={exemplo} alt="" />
            </li>
        </ul>
        </div>
        </>
    )
}

export default Podium;