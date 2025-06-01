import star from '../assets/icons/star.png'
import duck from '../assets/icons/duck.png'
import heart from '../assets/icons/heart.png'

function Hero(){
    return(
        <>
        <div className="h-lvh flex justify-center items-center relative">
            <div className='flex  absolute h-15 lg:h-30 items-end top-10 left-0'>
                <img className='relative w-10 h-10 lg:h-20 lg:w-20' src={star} alt=""/>
                <img className='relative w-10 h-10 self-start lg:h-20 lg:w-20' src={star} alt="" />
                <img className='relative w-10 h-10 lg:h-20 lg:w-20' src={star} alt="" />                
            </div>
            <div className='flex absolute top-10 right-0'>
                <img className='w-10 lg:w-20' src={heart} alt="" />
                <img className='w-10 lg:w-20' src={heart} alt="" />
                <img className='w-10 lg:w-20' src={heart} alt="" />
            </div>
            <div className="bg-white  border-yellow-300 border-6 p-2">
                <h1 className="text-5xl text-center lg:text-9xl">MEGA<br />LEADERBOARD</h1>
            </div>
            <img className="w-2 absolute bottom-10 left-0 w-20 lg:w-40" src={duck} alt="" />
            <div className='flex flex-col absolute bottom-10 gap-5 right-0'>
                <img className='lg:w-20 w-10'  src={star} alt="" />
                <img className='lg:w-20 w-10' src={star} alt="" />              
            </div>
        </div>
        </>
    )
}

export default Hero;
