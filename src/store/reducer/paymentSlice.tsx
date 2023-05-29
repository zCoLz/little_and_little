import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PaymentState {
  cardnumber: number;
  namecard: string;
}
const initialState: PaymentState = {
  cardnumber: 0,
  namecard: '',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setCardNumber: (state, action: PayloadAction<number>) => {
      state.cardnumber = action.payload;
    },
    setNameCard: (state, action: PayloadAction<string>) => {
      state.namecard = action.payload;
    },
  },
});
export const { setCardNumber, setNameCard } = paymentSlice.actions;
export default paymentSlice.reducer;
