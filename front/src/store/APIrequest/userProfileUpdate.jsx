import { createAsyncThunk } from '@reduxjs/toolkit'
import { setLoading, setError, setUsername } from '../reducer/loginSlicer'

export const updateUsername = createAsyncThunk(
  'userUpdate',
  async ({ userName, token }, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch(
        'http://127.0.0.1:3001/api/v1/user/profile',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            accept: '*/*',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userName: userName,
          }),
        }
      )

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message)
      }
      dispatch(setLoading(false))
      dispatch(setUsername(userName))
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setError(error.message))
    }
  }
)
