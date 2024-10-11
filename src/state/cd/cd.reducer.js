import { createSlice } from '@reduxjs/toolkit';

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
      state.cds = action.payload;
      setLoading(false);
    },

    addCD: () => {
      setLoading(true);
    },

    editCD: () => {
      setLoading(true);
    },

    removeCD: () => {
      setLoading(true);
    }
  }
});

export const { loadCDs, setCDs, addCD, setLoading, editCD, removeCD } = cdSlice.actions;

export default cdSlice.reducer;
