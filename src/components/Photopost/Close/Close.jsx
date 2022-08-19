import style from './Close.module.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Close_icon } from './img/close_icon.svg';

export const Close = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  return (
    <Close_icon
      className={style.close_icon}
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};
