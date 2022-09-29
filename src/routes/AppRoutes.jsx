import HomePage from '../pages/HomePage/HomePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { Routes, Route } from "react-router-dom"

const AppRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
  )
}

export default AppRoutes