import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  dataUserProfile: {},
  error: {},
};


export const authSlice = createSlice({
  name: 'authSliceAuth',
  initialState,
  reducers: {

    authRequest: (state) => {
      state.loading = true;
      state.error = {};
    },

    authRequestSuccess: (state, action) => {
      state.loading = false;
      state.error = {};
      state.dataUserProfile = action.payload.dataUserProfile;
    },

    authClear: (state, action) => {
      state.loading = false;
      state.error = {};
      state.dataUserProfile = {};
    },

    authRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },

  },
});

export default authSlice.reducer;
