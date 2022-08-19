import style from './PhotoPost.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AuthorPhotopost } from './AuthorPhotopost/AuthorPhotopost';
import { DatePhotopost } from './DatePhotopost/DatePhotopost';
import { LikePhotopost } from './LikePhotopost/LikePhotopost';
import { PhotoPhotopost } from './PhotoPhotopost/PhotoPhotopost';
import { Close } from './Close/Close';
import { photoPostSlice } from '../../store/photoPost/photoPostSlice';
import { useEffect } from 'react';


export const Photopost = () => {
  let photopostObj = {};
  const dispatch = useDispatch();
  const idPhotopost = useLocation().pathname.slice(6);
  const photopostsData = useSelector(state => state.postsReducer.data);
  let likes = useSelector(state => state.photoPostReducer.likes);

  // console.log('likes: ', likes);

  photopostsData.map((item) => {
    if (item.id === idPhotopost) {
      photopostObj = item;
    }
  });

  if (likes === undefined) likes = photopostObj.likes;

  const likesPhotopost = photopostObj.likes;
  // console.log('likesPhotopost: ', typeof likesPhotopost);

  useEffect(() => {
    dispatch(photoPostSlice.actions.photopostRequestSuccess({ idPhotopost, likesPhotopost }));
  }, []);


  if (photopostObj.id) {
    return (
      <div className={style.container}>
        <div className={style.photopostContainer}>
          <PhotoPhotopost
            src={photopostObj.urls.regular}
            idPost={photopostObj.id}
            urls={photopostObj.urls}
          />
          <AuthorPhotopost
            userName={photopostObj.user.name}
            userLink={photopostObj.user.links.html}
          />
          <DatePhotopost createDate={photopostObj.created_at} />
          <LikePhotopost likes={likes} id={photopostObj.id} />
          <Close />
        </div>
      </div>
    );
  }
};
