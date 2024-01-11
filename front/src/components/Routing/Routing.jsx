import Home from '../../pages/home'
import Connection from '../../pages/connection'
import Dashboard from '../../pages/dashboard'
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
