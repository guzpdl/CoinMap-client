import HomePage from '../pages/HomePage/HomePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { Routes, Route } from "react-router-dom"
import CoinDetails from '../pages/Details/CoinDetails'

const AppRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/coins/:id' element={<CoinDetails />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
  )
}

export default AppRoutes