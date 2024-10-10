import { createSlice } from '@reduxjs/toolkit';

import { addItem, deleteItem, updateItem } from '../../util/state-util';

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

    addDVDTrigger: () => {
      setLoading(true);
    },
    addDVD: (state, action) => {
      addItem(state.dvds, action.payload);
      setLoading(false);
    },

    updateDVD: (state, action) => updateItem(state.dvds, action.payload),
    deleteDVD: (state, action) => deleteItem(state.dvds, action.payload)
  }
});

export const { addDVDTrigger, addDVD, updateDVD, deleteDVD } = dvdSlice.actions;

export default dvdSlice.reducer;
