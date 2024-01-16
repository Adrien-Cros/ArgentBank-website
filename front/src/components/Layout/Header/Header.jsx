import ArgentBankLogo from '../../../../src/assets/argentBankLogo.png'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '@fortawesome/fontawesome-free/css/all.css'
import './header.css'

function Header() {
  const authState = useSelector((state) => state.auth)
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {authState.token ? (
          <Link to="/" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign Out
          </Link>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Header
