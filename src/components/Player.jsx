import meduck from '../assets/icons/meducks.png'
import exemplo from '../assets/imgs/players/exemplo.png'

function Player({index, name, meducks}) {
    return(
        <>
        <li className="flex bg-white justify-between p-1 lg:p-3 rounded-[8px] md:rounded-2x  lg:text-5xl">
            <div className="flex content-between items-center w-max gap-1 lg:gap-4 pl-2">
                <p className="w-5 lg:w-15 text-center">{index < 10 ? `0${index}` : index}</p>
                <div className="bg-black aspect-square  overflow-hidden h-7 rounded-[5px] lg:h-20 md:rounded-2xl">
                    <img className='rounded-[5px] md:rounded-2xl' src={exemplo} alt="" />
                </div>
                <p className="">{name}</p>
            </div>
            <div className="flex justify-center items-center relative">
                <img className='relative h-7 lg:h-20 -right-2/12' src={meduck} alt="" />
                <p className="bg-black rounded-[8px] lg:h-20 h-7 pl-4 lg:pl-11 w-15 lg:w-40 flex items-center text-white">{meducks}</p>
            </div>
        </li>
        </>
    )
}

export default Player;