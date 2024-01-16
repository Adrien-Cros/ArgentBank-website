import ArgentBankLogo from '../../../../src/assets/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  setFirstName,
  setLastName,
  setToken,
  setUsername,
} from '../../../store/loginSlicer'

import '@fortawesome/fontawesome-free/css/all.css'
import './header.css'

function Header() {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDisconnect = (event) => {
    event.preventDefault()
    dispatch(setToken(null))
    dispatch(setUsername(null))
    dispatch(setLastName(null))
    dispatch(setFirstName(null))
    navigate('/')
  }

  useEffect(() => {}, [dispatch])

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
              <i className="fa fa-user-circle"></i>
              {authState.userName}
            </Link>
            <Link className="main-nav-item" onClick={handleDisconnect}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
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
