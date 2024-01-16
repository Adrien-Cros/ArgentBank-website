import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: null,
    firstName: null,
    lastName: null,
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setUsername: (state, action) => {
      state.userName = action.payload
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const {
  setUsername,
  setFirstName,
  setLastName,
  setToken,
  setLoading,
  setError,
} = authSlice.actions
export default authSlice.reducer

export const tryConnect = createAsyncThunk(
  'auth/tryConnect',
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
      dispatch(setToken(data.body.token))
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setError(error.message))
    }
  }
)
