import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    registerUser: () => {},
    loginUser: () => {}
  }
});

export const { registerUser, loginUser } = authSlice.actions;

export default authSlice.reducer;
