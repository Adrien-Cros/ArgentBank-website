import Home from '../../pages/Home/home'
import Connection from '../../pages/Connection/connection'
import Dashboard from '../../pages/Dashboard/dashboard'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout//Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Routing() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routing
