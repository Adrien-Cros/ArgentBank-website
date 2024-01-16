import Home from '../../pages/Home/home'
import Login from '../../pages/Login/login'
import Profile from '../../pages/Profile/profile'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Routing() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routing
