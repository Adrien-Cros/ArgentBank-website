import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: '',
    firstName: '',
    lastName: '',
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
