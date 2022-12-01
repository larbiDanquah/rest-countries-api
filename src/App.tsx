import Header from "./components/Header"
import HomeRoute from "./routes/HomeRoute"
import { Routes, Route } from 'react-router-dom'
import CountryRoute from './routes/CountryRoute'
import { useEffect } from "react"
import { useAppSelector } from "./redux/hooks"

function App() {
  const { theme } = useAppSelector(state => state.themeSwitcher)
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }

    return () => {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <div className="bg-light-mode-bg dark:bg-dark-mode-bg app pb-6">
      <Header />

        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/countries/:countryId" element={<CountryRoute />} />
        </Routes>
      </div>
  )
}

export default App
