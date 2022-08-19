import { API_URL_PHOTOS } from '../../api/consts';
import { photoPostSlice } from '../photoPost/photoPostSlice';
import { likesSlice } from './likesSlice';

export const addLikeAsynk = (id, methodRequest) => (dispatch) => {
  const token = localStorage.getItem('bearer');

  const urlAddLike = new URL(`${API_URL_PHOTOS}/${id}/like`);

  if (!token) return;

  fetch(urlAddLike.href, {
    method: methodRequest,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      const data = response;
      // console.log('data: ', data);
      const likesPhotopost = data.photo.likes;
      // console.log('likesPhotopost: ', likesPhotopost);

      dispatch(photoPostSlice.actions.photopostRequestSuccess({ likesPhotopost }));
    })
    .catch((error) => {
      console.error('ошибка в addLike (LikePhotopost.js)!!!', error);
      dispatch(likesSlice.actions.likesPlusError({ error }));
    });
};
