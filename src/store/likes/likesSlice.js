import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  data: '',
  error: {},
};

export const likesSlice = createSlice({
  name: 'likesSliceLikes',
  initialState,
  reducers: {

    likesPlus: (state, action) => {
      state.likes = action.payload.data;
      state.error = {};
    },

    likesPlusError: (state, action) => {
      state.error = action.payload.error;
    },

  },
});

export default likesSlice.reducer;
