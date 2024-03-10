import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import contactsReducer from "../features/Contacts/ContactsSlice";
import  userReducer  from "../features/User/UserSlice";
import { userAccountApi } from "./Service/userAccountApi";
import { userBalanceApi } from "./Service/userBalanceApi";
import { userContactsApi } from "./Service/userContactsApi";
import { userMovementsApi } from "./Service/userMovementsApi";
import { userProfileApi } from "./Service/userProfileApi";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: userReducer,
    [userAccountApi.reducerPath]: userAccountApi.reducer,
    [userBalanceApi.reducerPath]: userBalanceApi.reducer,
    [userContactsApi.reducerPath]: userContactsApi.reducer,
    [userMovementsApi.reducerPath]: userMovementsApi.reducer,
    [userProfileApi.reducerPath]: userProfileApi,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAccountApi.middleware,
      userBalanceApi.middleware,
      userContactsApi.middleware,
      userMovementsApi.middleware,
      userProfileApi.middleware,
    ),
});

setupListeners(store.dispatch);
