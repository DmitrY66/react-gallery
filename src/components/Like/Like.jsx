import style from './Like.module.css';
import PropTypes from 'prop-types';

export const Like = ({ likes }) => {
  return (
    <button className={style.like}>{likes}</button>
  );
};

Like.propTypes = {
  likes: PropTypes.number,
};
