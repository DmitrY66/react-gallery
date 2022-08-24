import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  error: {},
  isLast: false,
};

export const postsSlice = createSlice({
  name: 'postsSlicePhotos',
  initialState,
  reducers: {
    postsRequest: (state) => {
      state.loading = true;
      state.error = {};
    },

    postsRequestSuccess: (state, action) => {
      state.loading = false;
      state.error = {};
      // state.data = action.payload.data;
      state.data = [...state.data, ...action.payload.data];
    },

    postsRequestError: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },


    postsRequestSuccessAfter: (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = [...state.data, ...action.payload.data];
    },

  },
});
// console.log(postsSlice);
export default postsSlice.reducer;
