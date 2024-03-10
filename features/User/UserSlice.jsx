import { createSlice } from "@reduxjs/toolkit";



export const ContactsSlice = createSlice({
  name: "contacts",
  initialState: "",
  reducers: {

setUser: (state, action) => {},

    deleteContact: (state, action) => {
       const index = state.findIndex(
        (account) => account.id === action.payload.id,
      );
      state.splice(index, 1); 

    },
    addContact: (state, action) => {
      state.unshift(action.payload);

    },
  },
});

export const { addContact, deleteContact } = ContactsSlice.actions;
export default ContactsSlice.reducer;
