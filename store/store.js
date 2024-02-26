import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Ej -Counter/CounterSlice' // name del slice + Reducer


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
