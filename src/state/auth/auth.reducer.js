import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    registerUser: () => {}
  }
});

export const { registerUser } = authSlice.actions;

export default authSlice.reducer;
