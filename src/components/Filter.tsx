import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { changeRegion } from '../redux/features/filterRegion/filterRegionSlice';
import more from '../assets/expand-more.svg'

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
            <button onClick={() => setIsOpened(prev => !prev)} className="flex justify-between items-center gap-12 bg-white w-full py-4 px-4 rounded-lg drop-shadow-md">
                <p className='text-xs md:text-sm'>{currentRegion === 'all' ? 'Filter by Region' : currentRegion}</p>
                <img src={more} alt="more" />
            </button>

            <div style={{ display: isOpened ? "block" : "none" }} className='absolute bg-white w-full mt-1 rounded-lg drop-shadow-md z-10'>
                {regions.map((region, i) => (
                    <p 
                    key={i} 
                    className='py-2 pl-6 cursor-pointer hover:bg-gray-200'
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