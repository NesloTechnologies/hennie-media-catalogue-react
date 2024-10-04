import { createSlice } from '@reduxjs/toolkit';

import { addItem, deleteItem, updateItem } from '../../util/state-util';

const initialState = {
  cds: []
};

const cdSlice = createSlice({
  name: 'cdSlice',
  initialState,
  reducers: {
    addCD: (state, action) => addItem(state.cds, action.payload),
    updateCD: (state, action) => updateItem(state.cds, action.payload),
    deleteCD: (state, action) => deleteItem(state.cds, action.payload)
  }
});

export const { addCD, updateCD, deleteCD } = cdSlice.actions;

export default cdSlice.reducer;
