import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../composables/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})