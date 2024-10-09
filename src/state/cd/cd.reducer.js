import { createSlice } from '@reduxjs/toolkit';

import { addItem, deleteItem, setItems, updateItem } from '../../util/state-util';

const initialState = {
  cds: [],
  loading: false,
  error: null
};

const cdSlice = createSlice({
  name: 'cdSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setCDsDispatch: () => {
      setLoading(true);
    },
    setCDs: (state, action) => {
      setItems(state.cds, action.payload);

      setLoading(false);
    },

    addCDDispatch: () => {
      setLoading(true);
    },
    addCD: (state, action) => {
      addItem(state.cds, action.payload);
      setLoading(false);
    },

    updateCDDispatch: () => {
      setLoading(true);
    },
    updateCD: (state, action) => {
      updateItem(state.cds, action.payload);
      setLoading(false);
    },

    deleteCD: (state, action) => deleteItem(state.cds, action.payload)
  }
});

export const {
  setCDsDispatch,
  setCDs,
  addCDDispatch,
  addCD,
  setLoading,
  updateCDDispatch,
  updateCD,
  deleteCD
} = cdSlice.actions;

export default cdSlice.reducer;
