import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ContactState {
  name: string;
  note: string;
  email: string;
  phone: string;
  address: string;
}
const initialState: ContactState = {
  name: ' ',
  note: '',
  email: '',
  phone: '',
  address: '',
};
const ContactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});
export const { setName, setNote, setEmail, setPhone, setAddress } =
  ContactSlice.actions;
export default ContactSlice.reducer;
