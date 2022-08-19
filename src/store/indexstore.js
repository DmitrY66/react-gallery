import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './posts/postsSlice';
import tokenReducer from './token/tokenSlice';
import authReducer from './auth/authSlice';
import photoPostReducer from './photoPost/photoPostSlice';
import likesReducer from './likes/likesSlice';

export const store = configureStore({
  reducer: {
    postsReducer,
    tokenReducer,
    authReducer,
    photoPostReducer,
    likesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});
