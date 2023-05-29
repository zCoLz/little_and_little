import { configureStore } from '@reduxjs/toolkit';
import ticketSlice from './reducer/ticketSlice';
import paymentSlice from './reducer/paymentSlice';
import contactSlice from './reducer/contactSlice';

const store = configureStore({
  reducer: {
    ticket: ticketSlice,
    payment: paymentSlice,
    contact: contactSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
