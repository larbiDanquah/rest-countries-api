import search from '../assets/search.svg';
import { searchCountry } from '../redux/features/searchCountry/searchCountrySlice';
import { useAppDispatch } from '../redux/hooks';

const Search = () => {
    const dispatch = useAppDispatch();

    
    return (
        <div className='flex bg-white md:w-2/5 pl-8 rounded-lg drop-shadow-md'>
            <img src={search} alt="Search Icon" />
            <input 
            onChange={(e) => dispatch(searchCountry(e.target.value))}
            className='w-full py-4 px-6 focus:outline-none rounded-lg placeholder:text-sm md:placeholder:text-md' 
            placeholder="Search for a country..." 
            />
        </div>
    );
}

export default Search;