import moon from '../assets/moon-empty.svg';

const Header = () => {
    return (
        <header className='w-full bg-white drop-shadow-md'>
            <div className='flex justify-between items-center py-6 w-4/5 my-0 mx-auto'>
                <h1 className="font-extrabold text-sm md:text-2xl">Where in the world?</h1>

                <button className='flex items-center gap-2'>
                    <img className='w-4 h-4 md:w-5 md:h-5' src={moon} alt="Moon Icon" />
                    <p className='text-xs md:text-sm'>Dark Mode</p>
                </button>
            </div>
        </header>
    )
}

export default Header