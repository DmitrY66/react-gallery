import { ACCESS_KEY, API_URL_PHOTOS } from '../../api/consts';
import { postsSlice } from './postsSlice';


export const postsAsync = ({ page = 1, count = 10 }) => (dispatch, getState) => {
  dispatch(postsSlice.actions.postsRequest());

  const token = getState().tokenReducer.token;
  // console.log('token: ', token);

  const urlGetPhotos = new URL(API_URL_PHOTOS);
  urlGetPhotos.searchParams.set('client_id', ACCESS_KEY);
  urlGetPhotos.searchParams.append('per_page', count);
  urlGetPhotos.searchParams.append('page', page);
  // console.log('urlGetPhotos: ', urlGetPhotos);
  // console.log(urlGetPhotos.href.includes('&page=1'));

  fetch(urlGetPhotos, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      const data = response;
      console.log('data: ', data);
      // if (urlGetPhotos.href.includes('&page=1')) {
      //   dispatch(postsSlice.actions.postsRequestSuccess({ data }));
      // } else {
      //   dispatch(postsSlice.actions.postsRequestSuccessAfter({ data }));
      // }
      dispatch(postsSlice.actions.postsRequestSuccess({ data }));
    })
    .catch((error) => {
      console.error('ошибка в postsAsync (postAction.js)!!!', error);
      dispatch(postsSlice.actions.postsRequestError({ error }));
    });
};
