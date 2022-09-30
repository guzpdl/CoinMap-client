import HomePage from '../pages/HomePage/HomePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { Routes, Route } from "react-router-dom"
import ProfilePage from '../pages/ProfilePage/ProfilePage'



const AppRoutes = () => {


  return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='profile/:id' element={<ProfilePage/>}/>
            <Route path='*' element={<ErrorPage />} />
        </Routes>
  )
}

export default AppRoutes