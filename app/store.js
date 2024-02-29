import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from '../features/Contacts/ContactsSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer
  },
})
