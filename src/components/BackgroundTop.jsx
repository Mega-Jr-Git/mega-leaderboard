import background from "../assets/imgs/background.png"

function BackgroundTop(){
    return(
        <>
            <img className="absolute -z-10 top-0 left-0" src={background} alt="" />
        </>
    )
}

export default BackgroundTop