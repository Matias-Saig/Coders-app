import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const initialState = {
  email: "",
  idToken: "",
  localId: "",
  contacts: [],
  imageCam: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, actions) => (state = actions.payload),
    clearUser: (state) => (state = { email: "", idToken: "" }),
    setImageCam: (state, actions) => {
      state.value = { ...state.value, imageCam: actions.payload };
    },
    setContacts: (state, actions) => {
      state.value = { ...state.value, contacts: actions.payload };
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(
       (account) => account.id === action.payload.id,
     );
     state.splice(index, 1); 
     Alert.alert(`Contacto borrado: \n${action.payload.name} ${action.payload.lastname}`); 
   },
   addContact: (state, action) => {
     state.unshift(action.payload);
     Alert.alert(`Contacto agregado: \n${action.payload.name} ${action.payload.lastname}`); 
   },
  },
});

export const { setUser, clearUser, setImageCam, setContacts, addContact, deleteContact } = authSlice.actions;

export default authSlice.reducer;
