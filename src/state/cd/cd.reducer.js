import { createSlice } from '@reduxjs/toolkit';

import { addItem, deleteItem, updateItem } from '../../util/state-util';

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

    setCD: () => {
      setLoading(true);
    },
    addCD: (state, action) => {
      addItem(state.cds, action.payload);
      setLoading(false);
    },

    editCD: () => {
      setLoading(true);
    },
    updateCD: (state, action) => {
      updateItem(state.cds, action.payload);
      setLoading(false);
    },

    deleteCD: (state, action) => deleteItem(state.cds, action.payload)
  }
});

export const { setCD, addCD, setLoading, editCD, updateCD, deleteCD } = cdSlice.actions;

export default cdSlice.reducer;
