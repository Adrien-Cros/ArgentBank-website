// logoutUser.jsx
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import {
  setToken,
  setFirstName,
  setLastName,
  setLogged,
  setUsername,
} from './loginSlicer'

const useLogoutUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutUser = () => {
    dispatch(setToken(null))
    dispatch(setUsername(null))
    dispatch(setLastName(null))
    dispatch(setFirstName(null))
    dispatch(setLogged(false))
    navigate('/')
  }

  return logoutUser
}

export default useLogoutUser
