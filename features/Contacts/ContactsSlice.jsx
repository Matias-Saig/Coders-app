import { createSlice } from "@reduxjs/toolkit";
import { contactsList as contacts } from "../../data/contactList";
import { Alert } from "react-native";


export const ContactsSlice = createSlice({
  name: "contacts",
  initialState: contacts,
  reducers: {
    deleteContact: (state, action) => {
       const index = state.findIndex(
        (account) => account.id === action.payload.id,
      );
      state.splice(index, 1); 
      Alert.alert(`Contacto borrado: \n${action.payload.name} ${action.payload.lastname}`); 

      /*  options 2

    const accounts = state.accounts.filter(account => account.id !== action.payload);

    // Reemplazar el array original con el array filtrado
    state.accounts = accounts;
 */
    },
    addContact: (state, action) => {
      state.contacts.unshift(action.payload);
    },
  },
});

export const { addContact, deleteContact } = ContactsSlice.actions;
export default ContactsSlice.reducer;
