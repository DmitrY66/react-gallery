import { API_URL_AUTH_USER_PROFILE } from '../../api/consts';
import { authSlice } from './authSlice';


export const authClearAsync = () => (dispatch) => {
  dispatch(authSlice.actions.authClear());
  // console.log('сработал authClearAsync из authAction');
};

export const authAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  // console.log('сработал authAsync из authAction');
  if (!token) return;

  dispatch(authSlice.actions.authRequest());

  fetch(API_URL_AUTH_USER_PROFILE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      const userName = response.username;
      const userAvatar = response.profile_image.medium;
      const dataUserProfile = { userName, userAvatar };
      // console.log('dataUserProfile: ', dataUserProfile);
      localStorage.setItem('auth', JSON.stringify(dataUserProfile));
      dispatch(authSlice.actions.authRequestSuccess({ dataUserProfile }));
    })
    .catch((error) => {
      console.error('ошибка в postsAsync (postAction.js)!!!', error);

      dispatch(authSlice.actions.authRequestError({ error }));
    });
};
