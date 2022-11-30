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
    const [country, setCountry] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch(`https://restcountries.com/v2/name/${countryId}?fullText=true`)
        .then(response => response.json())
        .then(setCountry)
        .then(() => setLoading(false))
        .catch(setError)
    }, [countryId])
    

    if (loading) return <h1 className="text-center mt-6 text-xl">Loading...</h1>
    if (error) return <pre>{JSON.stringify(error)}</pre>
    if (!country) return null
    
    return(
        <div className='w-4/5 mt-12 my-0 mx-auto'>
            <Link to="/" className='flex items-center gap-2 bg-white w-28 px-6 py-1.5 drop-shadow-md rounded'>
                <img src={back} alt="Back" />
                Back
            </Link>

            <div className='mt-16'>
                {country.map((country: Country) => (
                    <div key={country.alpha3Code}>
                        <img className='rounded-md mb-11' src={country.flag} />

                        <h1 className='text-xl font-bold mb-4'>{country.name}</h1>

                        <div className='space-y-4 mb-8'>
                            <p className='text-sm'><span className='font-semibold'>Native Name:</span> {country.nativeName}</p>
                            <p className='text-sm'><span className='font-semibold'>Population:</span> {country.population.toLocaleString()}</p>
                            <p className='text-sm'><span className='font-semibold'>Region:</span> {country.region}</p>
                            <p className='text-sm'><span className='font-semibold'>Sub Region:</span> {country.subregion}</p>
                            <p className='text-sm'><span className='font-semibold'>Capital:</span> {country.capital}</p>
                        </div>

                        <div className='space-y-4 mb-8'>
                            <p className='text-sm'><span className='font-semibold'>Top Level Domain:</span> {country.topLevelDomain}</p>
                            <p className='text-sm'><span className='font-semibold'>Currencies:</span> {country.currencies[0].code}</p>
                            <p className='text-sm'><span className='font-semibold'>Languages:</span> {
                            country.languages.map((language, i) => {
                                if (i === country.languages.length - 1) {
                                    return language.name
                                } else {
                                    return language.name + ', '
                                }
                            })
                            }</p>
                        </div>

                        <div className='mb-16'>
                            <h1 className='text-base font-semibold'>Border Countries:</h1>

                            <div className='mt-4 flex flex-wrap gap-2.5'>
                                {country.borders.map((border, i) => (
                                    <Link key={i} to={`/countries/${border}`} className='flex items-center gap-2 bg-white px-8 py-1.5 drop-shadow-md rounded'>
                                        {border}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountryRoute