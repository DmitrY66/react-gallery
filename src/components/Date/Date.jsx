import style from './Date.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

export const Date = ({ createDate }) => {
  return (
    <time
      className={style.date}
      dateTime={createDate}>
      {formatDate(createDate)}
    </time>
  );
};

Date.propTypes = {
  createDate: PropTypes.string,
};
