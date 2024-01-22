import Home from '../../pages/Home/home'
import Login from '../../pages/Login/login'
import Profile from '../../pages/Profile/profile'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Routing() {
  const authState = useSelector((state) => state.auth)
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {authState.isLogged === true ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/profile" element={<Navigate to="/login" />} />
        )}
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routing
