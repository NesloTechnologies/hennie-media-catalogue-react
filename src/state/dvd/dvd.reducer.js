import { createSlice } from '@reduxjs/toolkit';

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
      state.dvds = action.payload;
      setLoading(false);
    },

    addDVD: () => {
      setLoading(true);
    },

    editDVD: () => {
      setLoading(true);
    },

    removeDVD: () => {
      setLoading(true);
    }
  }
});

export const { loadDVDs, setDVDs, addDVD, editDVD, removeDVD, deleteDVD } = dvdSlice.actions;

export default dvdSlice.reducer;
