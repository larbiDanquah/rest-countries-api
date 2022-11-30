import Search from "../components/Search"
import CountryList from "../components/CountryList"
import Filter from "../components/Filter"

const HomeRoute = () => {
    return (
        <div>
            <div className="w-4/5 mt-12 my-0 mx-auto flex flex-col gap-10 md:flex-row md:justify-between md:items-center">
            <Search />
            <Filter />
            </div>
    
            <CountryList />
        </div>
    )
}

export default HomeRoute