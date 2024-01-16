import { configureStore } from '@reduxjs/toolkit'
import authReducer from './loginSlicer'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export default store
