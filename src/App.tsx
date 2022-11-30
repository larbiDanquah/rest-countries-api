import Header from "./components/Header"
import HomeRoute from "./routes/HomeRoute"
import { Routes, Route } from 'react-router-dom'
import CountryRoute from './routes/CountryRoute'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/countries/:countryId" element={<CountryRoute />} />
      </Routes>
    </div>
  )
}

export default App
