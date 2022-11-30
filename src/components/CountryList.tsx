import { useState, useEffect } from "react"
import { useAppSelector } from "../redux/hooks"
import Country from "./Country"
import { Link } from 'react-router-dom'

interface Country {
    name: string,
    population: number,
    capital: string,
    region: string,
    flag: string,
}

const CountryList = () => {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const { currentRegion } = useAppSelector((state) => state.regionFilter)
    const { currentCountry } = useAppSelector((state) => state.countrySearch)

    const searchCountriesByRegion = (region: string) => {
        fetch(`https://restcountries.com/v2/region/${currentRegion.toLowerCase()}`)
            .then(response => response.json())
            .then(setCountries)
            .then(() => setLoading(false))
            .catch(setError)
    }

    useEffect(() => {
        setLoading(true)

        if (currentRegion === 'all') {
            fetch(`https://restcountries.com/v2/all`)
            .then(response => response.json())
            .then(setCountries)
            .then(() => setLoading(false))
            .catch(setError)
        } else {
            // Search by region
            searchCountriesByRegion(currentRegion)
        }

    }, [currentRegion])


    useEffect(() => {
        
        if (currentCountry.trim().length > 0) {
            setLoading(true)
            
            fetch(`https://restcountries.com/v2/name/${currentCountry.toLowerCase()}`)
            .then(response => response.json())
            .then(setCountries)
            .then(() => setLoading(false))
            .catch(setError)
        }
    }, [currentCountry])


    if (loading) return <h1 className="text-center mt-6 text-xl">Loading...</h1>
    if (error) return <pre>{JSON.stringify(error)}</pre>
    if (!countries) return null
    if (!country) return null
    
    return (
        <div className="w-4/5 mt-12 my-0 mx-auto pb-6 grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {countries.length > 1 ? countries.map((country: Country, i) => (<Link key={i} to={`/countries/${country.name}`}><Country country={country} /></Link>)) : ''}
        </div>
    )


}

export default CountryList