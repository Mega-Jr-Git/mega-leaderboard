import logo from '../assets/icons/logo.svg'

function LogoFooter(){
    return(
        <>
        <div className='w-full flex justify-center p-10 lg:p-20'>
            <img className='w-10 lg:w-20' src={logo} alt="" />
        </div>
        </>
    )
}

export default LogoFooter;