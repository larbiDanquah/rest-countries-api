interface Props {
    country: CountryType,
}

interface CountryType {
    name: string,
    population: number,
    capital: string,
    region: string,
    flag: string,
}

const Country: React.FC<Props> = ({country}) => {
    return (
        <div className="w-64 bg-white shadow-md rounded-lg mx-auto dark:bg-dark-mode-lighter">
            <img className="h-40 w-full object-cover rounded-t-lg" src={country.flag} alt="Flag" />

            <div className="pt-6 pb-11 pl-6">
                <h1 className="text-lg font-bold mb-4 dark:text-white">{country.name}</h1>

                <div className="space-y-2">
                    <p className="text-sm dark:text-white"><span className="font-bold">Population:</span> {country.population.toLocaleString()}</p>
                    <p className="text-sm dark:text-white"><span className="font-bold">Region:</span> {country.region}</p>
                    <p className="text-sm dark:text-white"><span className="font-bold">Capital:</span> {country.capital}</p>
                </div>
            </div>
        </div>
    )
}

export default Country