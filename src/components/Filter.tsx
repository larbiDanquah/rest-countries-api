import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { changeRegion } from '../redux/features/filterRegion/filterRegionSlice';

const regions: Array<string> = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
];

const Filter = () => {
    const [isOpened, setIsOpened] = useState(false)
    
    const { currentRegion } = useAppSelector((state) => state.regionFilter)
    const dispatch = useAppDispatch();

    return (
        <div className='relative w-52'>
            <button onClick={() => setIsOpened(prev => !prev)} className="flex justify-between items-center gap-12 bg-white w-full py-4 px-4 rounded-lg drop-shadow-md dark:bg-dark-mode-lighter">
                <p className='text-xs md:text-sm dark:text-white'>{currentRegion === 'all' ? 'Filter by Region' : currentRegion}</p>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="expand-more"><path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M8.45 0.450001L5 3.9L1.55 0.450001L0.5 1.5L5 6L9.5 1.5L8.45 0.450001Z" className='fill-black dark:fill-white'/></g></svg>
            </button>

            <div style={{ display: isOpened ? "block" : "none" }} className='absolute bg-white w-full mt-1 rounded-lg drop-shadow-md z-10 dark:bg-dark-mode-lighter'>
                {regions.map((region, i) => (
                    <p 
                    key={i} 
                    className='py-2 pl-6 cursor-pointer hover:bg-gray-200 dark:text-white dark:hover:bg-dark-mode-bg'
                    onClick={() => dispatch(changeRegion(region))}
                    >
                        {region}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Filter;