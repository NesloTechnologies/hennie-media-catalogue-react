import { createSlice } from '@reduxjs/toolkit';

import { addItem, deleteItem, loadItems, updateItem } from '../../util/state-util';

const initialState = {
  cds: [],
  cd: undefined,
  loading: false
};

const cdSlice = createSlice({
  name: 'cdSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setCDTrigger: () => {
      setLoading(true)
    },
    setCD: (state, action) => {
      state.cd = action.payload;
      setLoading(false)
    },

    loadCDsTrigger: () => {
      setLoading(true);
    },
    loadCDs: (state, action) => {
      loadItems(state.cds, action.payload);
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

    deleteCDTrigger: () => {
      setLoading(true);
    },
    deleteCD: (state, action) => {
      deleteItem(state.cds, action.payload);
      setLoading(false);
    }
  }
});

export const {
  setCDTrigger,
  setCD,
  loadCDsTrigger,
  loadCDs,
  addCDTrigger,
  addCD,
  setLoading,
  updateCDTrigger,
  updateCD,
  deleteCDTrigger,
  deleteCD
} = cdSlice.actions;

export default cdSlice.reducer;
