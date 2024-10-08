import { createSlice } from '@reduxjs/toolkit';

import { deleteItem, updateItem } from '../../util/state-util';

const initialState = {
  cds: [],
  loading: false,
  error: null
};

const cdSlice = createSlice({
  name: 'cdSlice',
  initialState,
  reducers: {
    addCDRequest: (state) => {
      state.loading = true;
      state.error = null;
    }, 
    addCDSuccess: (state, action) => {
      state.loading = false;
      state.cds.push(action.payload);
    },
    addCDFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload
    },
    updateCD: (state, action) => updateItem(state.cds, action.payload),
    deleteCD: (state, action) => deleteItem(state.cds, action.payload)
  }
});

export const { addCDRequest, addCDSuccess, addCDFailure, updateCD, deleteCD } = cdSlice.actions;

export default cdSlice.reducer;
