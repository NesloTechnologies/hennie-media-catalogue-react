import { createSlice } from '@reduxjs/toolkit';

import { addItem, deleteItem, updateItem } from '../../utils/state-util';

const initialState = {
  dvds: []
};

const dvdSlice = createSlice({
  name: 'dvdSlice',
  initialState,
  reducers: {
    addDVD: (state, action) => addItem(state.dvds, action.payload),
    updateDVD: (state, action) => updateItem(state.dvds, action.payload),
    deleteDVD: (state, action) => deleteItem(state.dvds, action.payload)
  }
});

export const { addDVD, updateDVD, deleteDVD } = dvdSlice.actions;

export default dvdSlice.reducer;
