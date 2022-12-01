import { useState } from 'react';
import moon from '../assets/moon-empty.svg';
import moonFilled from '../assets/moon-filled.svg'
import { setTheme } from '../redux/features/setTheme/themeSlice';
import { useAppSelector } from '../redux/hooks';
import { useAppDispatch } from '../redux/hooks';

const Header = () => {

    const { theme } = useAppSelector(state => state.themeSwitcher)
    const dispatch = useAppDispatch()
    
    return (
        <header className='w-full bg-white drop-shadow-md dark:bg-dark-mode-lighter'>
            <div className='flex justify-between items-center py-6 w-4/5 my-0 mx-auto'>
                <h1 className="font-extrabold text-sm md:text-2xl dark:text-white">Where in the world?</h1>

                <button 
                className='flex items-center gap-2'
                onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}
                >
                    {theme === "light" ? 
                    <img className='w-4 h-4 md:w-5 md:h-5' src={moon} alt="Moon Icon" /> : 
                    <img className='w-4 h-4 md:w-5 md:h-5' src={moonFilled} alt="Moon Icon" />
                    }
                    
                    <p className='text-xs md:text-sm dark:text-white'>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
                </button>
            </div>
        </header>
    )
}

export default Header