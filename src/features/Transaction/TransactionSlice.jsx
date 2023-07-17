import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactions,
} from "./TransactionAPI";

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
};

//create async thunk
export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions", // 'folder name / thunk name
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);

export const createTransactions = createAsyncThunk(
  "transaction/createTransaction",
  async (data) => {
    const transaction = addTransaction(data);
    return transaction;
  }
);

export const changeTransaction = createAsyncThunk(
  "transaction/changeTransactions",
  async ({ id, data }) => {
    const transaction = editTransaction(id, data);
    return transaction;
  }
);

export const removeTransaction = createAsyncThunk(
  "transaction/removeTransactions",
  async (id) => {
    const transaction = deleteTransaction(id);
    return transaction;
  }
);

//create slice
const transactionSlice = createSlice({
  name: "transaction", // folder name
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
        state.transactions = [];
      })
      .addCase(createTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions.push(action.payload);
      })
      .addCase(createTransactions.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(changeTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;

        const indexToUpdate = state.transactions.findIndex(
          (item) => item.id === action.payload.id
        );
        state.transactions[indexToUpdate] = action.payload;
      })
      .addCase(changeTransaction.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(removeTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = state.transactions.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default transactionSlice.reducer;
