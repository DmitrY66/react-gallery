import style from './Preview.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Preview = ({ prevLink, idPost }) => {
  return (
    // <Link className={style.preview} id={idPost} to={`/post/${idPost}`}>
    <Link className={style.preview} to={`/post/${idPost}`}>
      <img
        src={prevLink}
        alt='preview'
      />
    </Link>
  );
};

Preview.propTypes = {
  prevLink: PropTypes.string,
  idPost: PropTypes.string,
};
