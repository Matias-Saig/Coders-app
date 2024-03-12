import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const initialState = {
  email: "",
  idToken: "",
  localId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state = actions.payload;
      Alert.alert("Usuario registrado!");
    },

    clearUser: (state) => (state = { email: "", idToken: "" }),
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
