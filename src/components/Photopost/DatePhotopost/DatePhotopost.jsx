import style from './DatePhotopost.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';


export const DatePhotopost = ({ createDate }) => {
  return (
    <time
      className={style.date}
      dateTime={createDate}>
      {formatDate(createDate)}
    </time>
  );
};

DatePhotopost.propTypes = {
  createDate: PropTypes.string,
};
