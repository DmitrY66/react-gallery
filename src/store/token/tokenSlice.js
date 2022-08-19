import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  token: '',
  error: {},
};

export const tokenSlice = createSlice({
  name: 'tokenSliceToken',
  initialState,
  reducers: {

    tokenUpdate: (state, action) => {
      state.token = action.payload.token;
      state.error = {};
    },

    tokenDelete: (state) => {
      state.token = '';
    },

    tokenUpdateError: (state, action) => {
      state.error = action.payload.error;
    },

  },
});

export default tokenSlice.reducer;
