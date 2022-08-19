import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  id: '',
  likes: 0,
};

export const photoPostSlice = createSlice({
  name: 'photopostSlicePost',
  initialState,
  reducers: {
    photopostRequest: (state) => {
      state.loading = true;
    },

    photopostRequestSuccess: (state, action) => {
      state.loading = false;
      state.id = action.payload.idPhotopost;
      state.likes = action.payload.likesPhotopost;
    },

  },
});

export default photoPostSlice.reducer;
