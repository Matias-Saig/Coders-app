import { configureStore } from '@reduxjs/toolkit'
import ContactsReducer from '../features/Contacts/ContactsSlice'

export const store = configureStore({
  reducer: {
    ContactsReducer
  },
})
