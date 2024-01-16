import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  setLoading,
  setError,
  setUsername,
  setFirstName,
  setLastName,
} from './loginSlicer'

export const userInfo = createAsyncThunk(
  'user',
  async ({ token }, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch(
        'http://127.0.0.1:3001/api/v1/user/profile',
        {
          method: 'POST',
          headers: {
            accept: '*/*',
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message)
      }
      dispatch(setLoading(false))
      dispatch(setUsername(data.body.userName))
      dispatch(setFirstName(data.body.firstName))
      dispatch(setLastName(data.body.lastName))
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setError(error.message))
    }
  }
)
