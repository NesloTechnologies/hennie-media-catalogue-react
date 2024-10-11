import { createSlice } from '@reduxjs/toolkit';

import { addItem, deleteItem, loadItems, updateItem } from '../../util/state-util';

import { setLoading } from '../cd/cd.reducer';

const initialState = {
  dvds: [],
  loading: false
};

const dvdSlice = createSlice({
  name: 'dvdSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    loadDVDs: () => {
      setLoading(true);
    },
    setDVDs: (state, action) => {
      loadItems(state.dvds, action.payload);
      setLoading(false);
    },

    addDVD: () => {
      setLoading(true);
    },
    createDVD: (state, action) => {
      addItem(state.dvds, action.payload);
      setLoading(false);
    },

    editDVD: () => {
      setLoading(true);
    },
    updateDVD: (state, action) => {
      updateItem(state.dvds, action.payload);
      state.loading = false;
    },
    removeDVD: () => {
      setLoading(true)
    },
    deleteDVD: (state, action) => {
      deleteItem(state.dvds, action.payload);
      setLoading(false)
    }
  }
});

export const {
  loadDVDs,
  setDVDs,
  addDVD,
  createDVD,
  editDVD,
  updateDVD,
  removeDVD,
  deleteDVD
} = dvdSlice.actions;

export default dvdSlice.reducer;
