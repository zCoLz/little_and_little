import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TicketState {
  quantity: number;
  name: string;
  phone: string;
  email: string;
  package: string;
  date: string;
}

const initialState: TicketState = {
  quantity: 0,
  name: '',
  phone: '',
  email: '',
  package: '',
  date: '',
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPackage: (state, action: PayloadAction<string>) => {
      state.package = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
  },
});

export const { setQuantity, setName, setPhone, setEmail, setPackage, setDate } =
  ticketSlice.actions;

export default ticketSlice.reducer;
