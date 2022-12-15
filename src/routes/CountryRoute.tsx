import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import back from '../assets/arrow-back.svg'

interface Country {
    alpha3Code: string,
    name: string,
    nativeName: string,
    population: number,
    capital: string,
    region: string,
    subregion: string,
    topLevelDomain: Array<string>,
    currencies: { code: string, name: string, symbol: string }[],
    languages: { iso639_1: string, iso639_2: string, name: string }[],
    borders: [string],
    flag: string,
}

const CountryRoute = () => {
    const { countryId } = useParams();
    const [countries, setCountries] = useState<any[]>([])
    const [country, setCountry] = useState<Country>()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch(`https://restcountries.com/v2/alpha/${countryId}`)
        .then(response => response.json())
        .then(setCountry)
        .then(() => setLoading(false))
        .catch(setError)
    }, [countryId])

    useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
        .then(response => response.json())
        .then(setCountries)
        .catch(setError)
    }, [])

    const getBorderCountry = (borderCode: string) => {
        const foundCountry = countries.find(country => country.alpha3Code === borderCode)
        return foundCountry?.name 
    }
    

    if (loading) return <h1 className="text-center mt-6 text-xl">Loading...</h1>
    if (error) return <pre>{JSON.stringify(error)}</pre>
    if (!country) return null
    
    
    return(
        <div className='w-4/5 mt-12 my-0 mx-auto'>
            <Link to="/" className='flex items-center gap-2 bg-white w-28 px-6 py-1.5 drop-shadow-md rounded dark:bg-dark-mode-lighter'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="call-made"><path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z" className='fill-black dark:fill-white'/></g></svg>
                <p className='dark:text-white'>Back</p>
            </Link>

            <div className='mt-16'>
                    <div className='lg:flex lg:flex-row lg:gap-36 lg:justify-between lg:items-center'>
                        <img className='rounded-md mb-11 md:w-2/4' src={country.flag} />

                        <div>
                            <div className='lg:flex lg:justify-between lg:items-center'>
                                <div className='lg:flex lg:flex-col'>
                                    <h1 className='text-xl font-bold mb-4 dark:text-white'>{country.name}</h1>

                                    <div className='space-y-4 mb-8'>
                                        <p className='text-sm dark:text-white'><span className='font-semibold'>Native Name:</span> {country.nativeName}</p>
                                        <p className='text-sm dark:text-white'><span className='font-semibold'>Population:</span> {country.population}</p>
                                        <p className='text-sm dark:text-white'><span className='font-semibold'>Region:</span> {country.region}</p>
                                        <p className='text-sm dark:text-white'><span className='font-semibold'>Sub Region:</span> {country.subregion}</p>
                                        <p className='text-sm dark:text-white'><span className='font-semibold'>Capital:</span> {country.capital}</p>
                                    </div>
                                </div>

                                <div>
                                    <div className='space-y-4 mb-8'>
                                        <p className='text-sm dark:text-white'><span className='font-semibold'>Top Level Domain:</span> {country.topLevelDomain}</p>
                                        <p className='text-sm dark:text-white'><span className='font-semibold'>Currencies:</span> {country.currencies[0].code}</p>
                                        <p className='text-sm dark:text-white'><span className='font-semibold'>Languages:</span> {
                                        country.languages.map((language, i) => {
                                            if (i === country.languages.length - 1) {
                                                return language.name
                                            } else {
                                                return language.name + ', '
                                            }
                                        })
                                        }</p>
                                    </div>
                                </div>
                            </div>


                            <div className='mb-16'>
                                <h1 className='text-base font-semibold dark:text-white'>Border Countries:</h1>

                                <div className='mt-4 flex flex-wrap gap-2.5'>
                                    {country.borders.map((border, i) => (
                                        
                                        <Link key={i} to={`/countries/${border}`} className='flex items-center gap-2 bg-white px-8 py-1.5 drop-shadow-md rounded dark:text-white dark:bg-dark-mode-lighter'>
                                            {getBorderCountry(border)}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    )
}

export default CountryRoute