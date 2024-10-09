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

    setCDsTrigger: () => {
      setLoading(true);
    },
    setCDs: (state, action) => {
      setItems(state.cds, action.payload);

      setLoading(false);
    },

    addCDTrigger: () => {
      setLoading(true);
    },
    addCD: (state, action) => {
      addItem(state.cds, action.payload);
      setLoading(false);
    },

    updateCDTrigger: () => {
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
  setCDsTrigger,
  setCDs,
  addCDTrigger,
  addCD,
  setLoading,
  updateCDTrigger,
  updateCD,
  deleteCD
} = cdSlice.actions;

export default cdSlice.reducer;
