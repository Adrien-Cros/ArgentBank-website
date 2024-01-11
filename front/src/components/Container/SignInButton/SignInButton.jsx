import { Link } from 'react-router-dom'

import './SignInButton.css'

function SignInButton({ to, children }) {
  return (
    <Link to={to} className="sign-in-button">
      {children}
    </Link>
  )
}

export default SignInButton
