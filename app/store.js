import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// features
import contactsReducer from "../features/Contacts/ContactsSlice";
import authReducer from "../features/Auth/AuthSlice";

// service
import { userAccountApi } from "./Service/userAccountApi";
import { userBalanceApi } from "./Service/userBalanceApi";
import { userContactsApi } from "./Service/userContactsApi";
import { userMovementsApi } from "./Service/userMovementsApi";
import { userProfileApi } from "./Service/userProfileApi";
import { userAuthApi } from "./Service/userAuth";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [userAccountApi.reducerPath]: userAccountApi.reducer,
    [userBalanceApi.reducerPath]: userBalanceApi.reducer,
    [userContactsApi.reducerPath]: userContactsApi.reducer,
    [userMovementsApi.reducerPath]: userMovementsApi.reducer,
    [userProfileApi.reducerPath]: userProfileApi
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAuthApi.middleware,
      userAccountApi.middleware,
      userBalanceApi.middleware,
      userContactsApi.middleware,
      userMovementsApi.middleware,
      userProfileApi.middleware,
    ),
});

setupListeners(store.dispatch);
