import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer/loginSlicer'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export default store
