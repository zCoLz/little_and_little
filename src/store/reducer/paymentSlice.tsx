import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PaymentState {
  cardnumber: number;
  namecard: string;
  expirationdate: string;
}
const initialState: PaymentState = {
  cardnumber: 0,
  namecard: '',
  expirationdate: '',
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
    setExpirationDate: (state, action: PayloadAction<string>) => {
      state.expirationdate = action.payload;
    },
  },
});
export const { setCardNumber, setNameCard, setExpirationDate } =
  paymentSlice.actions;
export default paymentSlice.reducer;
