import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: null,
    firstName: null,
    lastName: null,
    token: null,
    isLoading: false,
    isLogged: false,
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
    setLogged: (state, action) => {
      state.isLogged = action.payload
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
  setLogged,
  setError,
} = authSlice.actions
export default authSlice.reducer
