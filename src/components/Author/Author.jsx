import style from './Author.module.css';
import PropTypes from 'prop-types';

export const Author = ({ userName, userLink }) => {
  return (
    <a
      className={style.author__link}
      id='' href={userLink}
      target='_blank'
      rel='noreferrer'
    >
      <p className={style.author__text}>{userName}</p>
      {/* <img
        className={style.author__photo}
        src="https://images.unsplash.com/profile-1639410901867-5932bcc818ccimage?ixlib=rb-1.2.1&amp;crop=faces&amp;fit=crop&amp;w=32&amp;h=32"
        role="presentation"
        alt='I mainly do editorial shoots.'
        title='Chandri Anggara'
      /> */}
    </a>
  );
};

Author.propTypes = {
  userName: PropTypes.string,
  userLink: PropTypes.string,
};
