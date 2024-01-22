import { createAsyncThunk } from '@reduxjs/toolkit'
import { setLoading, setToken, setError, setLogged } from './loginSlicer'
import { userInfo } from './userProfile'

export const tryLogin = createAsyncThunk(
  'auth/tryLogin',
  async ({ email, password }, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch('http://127.0.0.1:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message)
      }

      dispatch(setLoading(false))
      dispatch(setLogged(true))
      dispatch(setToken(data.body.token))
      if (data.body.token) {
        dispatch(userInfo({ token: data.body.token }))
      }
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setError(error.message))
    }
  }
)
