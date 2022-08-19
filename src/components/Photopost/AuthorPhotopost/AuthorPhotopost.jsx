import style from './AuthorPhotopost.module.css';
import PropTypes from 'prop-types';

export const AuthorPhotopost = ({ userName, userLink }) => {
  return (
    <a
      className={style.author__link}
      href={userLink}
      target='_blank'
      rel='noreferrer'
    >
      <p className={style.author__text}>{userName}</p>
    </a>
  );
};

AuthorPhotopost.propTypes = {
  userName: PropTypes.string,
  userLink: PropTypes.string,
};

