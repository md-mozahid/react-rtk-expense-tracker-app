import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/Transaction/TransactionSlice";

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});
