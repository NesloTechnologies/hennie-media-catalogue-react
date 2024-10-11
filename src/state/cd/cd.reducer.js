import { createSlice } from '@reduxjs/toolkit';

import { addItem, deleteItem, loadItems, updateItem } from '../../util/state-util';

const initialState = {
  cds: [],
  loading: false
};

const cdSlice = createSlice({
  name: 'cdSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    loadCDs: () => {
      setLoading(true);
    },
    setCDs: (state, action) => {
      loadItems(state.cds, action.payload);
      setLoading(false);
    },

    addCD: () => {
      setLoading(true);
    },
    createCD: (state, action) => {
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

    removeCD: () => {
      setLoading(true);
    },
    deleteCD: (state, action) => {
      deleteItem(state.cds, action.payload);
      setLoading(false);
    }
  }
});

export const {
  loadCDs,
  setCDs,
  addCD,
  createCD,
  setLoading,
  editCD,
  updateCD,
  removeCD,
  deleteCD
} = cdSlice.actions;

export default cdSlice.reducer;
