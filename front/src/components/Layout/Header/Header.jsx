import ArgentBankLogo from '../../../../src/assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useLogoutUser from '../../../store/logout/logoutUser'

import '@fortawesome/fontawesome-free/css/all.css'
import './header.css'

function Header() {
  const authState = useSelector((state) => state.auth)
  const logoutUser = useLogoutUser()

  const handleDisconnect = (event) => {
    event.preventDefault()
    logoutUser()
  }

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
      <div className="main-nav-connected">
        {authState.token ? (
          <>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle log-icon"></i>
              {authState.userName}
            </Link>
            <Link className="main-nav-item" onClick={handleDisconnect}>
              <i className="fa fa-sign-out log-icon"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle log-icon"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Header
