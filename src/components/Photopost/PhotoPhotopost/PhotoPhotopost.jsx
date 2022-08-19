import style from './PhotoPhotopost.module.css';
import PropTypes from 'prop-types';

export const PhotoPhotopost = ({ src }) => {
  return (
    <img
      className={style.photoBig}
      src={src}
      alt='preview'
    />
  );
};

PhotoPhotopost.propTypes = {
  src: PropTypes.string,
};
