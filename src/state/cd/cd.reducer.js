import { createSlice } from '@reduxjs/toolkit';

import { deleteItem, updateItem } from '../../util/state-util';

const initialState = {
  cds: [],
  loading: false,
  error: null
};

let nextID = 1;

const cdSlice = createSlice({
  name: 'cdSlice',
  initialState,
  reducers: {
    setCD: (state, action) => {},
    addCD: (state, action) => {
      state.cds.push({ ...action.payload, id: nextID++ });
      setLoading(false);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateCD: (state, action) => updateItem(state.cds, action.payload),
    deleteCD: (state, action) => deleteItem(state.cds, action.payload)
  }
});

export const { setCD, addCD, setLoading, updateCD, deleteCD } = cdSlice.actions;

export default cdSlice.reducer;
