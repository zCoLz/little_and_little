import { configureStore } from '@reduxjs/toolkit';
import ticketSlice from './reducer/ticketSlice';

const store = configureStore({
  reducer: {
    ticket: ticketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
