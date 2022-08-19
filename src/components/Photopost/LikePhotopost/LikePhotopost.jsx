import style from './LikePhotopost.module.css';
import PropTypes from 'prop-types';
import { addLikeAsynk } from '../../../store/likes/likesAction';
import { useDispatch } from 'react-redux';

export const LikePhotopost = ({ likes, id }) => {
  // console.log('id: ', id);
  // console.log('likes: ', likes);
  const dispatch = useDispatch();

  const postPlus = 'POST';
  const deletePlus = 'DELETE';

  const likesPlusOne = (methodRequest) => {
    dispatch(addLikeAsynk(id, methodRequest));
  };

  return (
    <div className={style.block_liked}>
      <button
        className={style.like}
        disabled
      >
        {likes}
      </button>
      <div
        className={style.liked}
        onClick={() => likesPlusOne(postPlus)}
      ></div>
      <div
        className={style.unliked}
        onClick={() => likesPlusOne(deletePlus)}
      ></div>
    </div>
  );
};

LikePhotopost.propTypes = {
  likes: PropTypes.number,
  id: PropTypes.string,
};
