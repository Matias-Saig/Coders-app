import { createSlice } from '@reduxjs/toolkit';

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    // Lista de cuentas
    accounts: [],
    // Cuenta actual seleccionada
    selectedAccount: null,
  },
  reducers: {
    // Agregar una nueva cuenta
    addAccount(state, action) {
      state.accounts.push(action.payload);
    },
    // Eliminar una cuenta
    deleteAccount(state, action) {
      const index = state.accounts.findIndex(account => account.id === action.payload);
      state.accounts.splice(index, 1);
    },
    // Seleccionar una cuenta
    selectAccount(state, action) {
      state.selectedAccount = action.payload;
    },
  },
});

export const { addAccount, deleteAccount, selectAccount } = accountsSlice.actions;
export const selectAccounts = state => state.accounts.accounts;
export const selectSelectedAccount = state => state.accounts.selectedAccount;

export default accountsSlice.reducer;


// Agregar cuenta

const dispatch = useDispatch();

const handleAddAccount = () => {
  const newAccount = {
    name: 'Nueva cuenta',
    balance: 1000,
  };

  dispatch(addAccount(newAccount));
};


// Eliminar cuenta

const dispatch = useDispatch();

const handleDeleteAccount = (accountId) => {
  dispatch(deleteAccount(accountId));
};


// Seleccionar cuenta

const dispatch = useDispatch();

const handleSelectAccount = (accountId) => {
  dispatch(selectAccount(accountId));
};


// Mostrar lista de cuentas

const accounts = useSelector(selectAccounts);

const AccountList = () => {
  return (
    <ul>
      {accounts.map(account => (
        <li key={account.id}>
          {account.name} - {account.balance}
        </li>
      ))}
    </ul>
  );
};

// Mostrar la información de la cuenta seleccionada:

const selectedAccount = useSelector(selectSelectedAccount);

const AccountDetails = () => {
  return (
    <div>
      <h1>{selectedAccount.name}</h1>
      <p>Saldo: {selectedAccount.balance}</p>
    </div>
  );
};