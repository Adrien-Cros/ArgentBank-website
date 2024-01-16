import { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { tryConnect } from '../../store/loginSlicer'

import '@fortawesome/fontawesome-free/css/all.css'
import './login.css'

function Login() {
  const dispatch = useDispatch()
  const authState = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(tryConnect)
  }, [dispatch])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [remember, setRemember] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(tryConnect({ email, password }))
  }

  /* const handleRemember = () => {
    setRemember(!remember)
  } */

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              /* checked={remember}
              onChange={handleRemember}*/
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
        {authState.token ? <Navigate to="/profile" /> : null}
      </section>
    </main>
  )
}

export default Login
