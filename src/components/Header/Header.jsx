import urlAuth from '../../api/auth';
import { useAuth } from '../../hooks/useAuth';
import style from './Header.module.css';
import logo from './img/logo.svg';
import { useDispatch } from 'react-redux';
import { authClearAsync } from '../../store/auth/authAction';
import { tokenClearAsync } from '../../store/token/tokenAction';
import { HOME_URL } from '../../api/consts';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let dataUserProf = {};

  dataUserProf = useAuth()[0];
  // console.log('dataUserProf: ', dataUserProf);


  const notAuth = () => {
    dispatch(tokenClearAsync());
    dispatch(authClearAsync());
    localStorage.removeItem('bearer');
    localStorage.removeItem('auth');
    location = HOME_URL;
  };

  const auth = () => {
    location = urlAuth;
  };

  // let dataUserProf = {};

  if (localStorage.getItem('auth') && localStorage.getItem('auth') !== 'undefined') {
    dataUserProf = JSON.parse(localStorage.getItem('auth'));
    // console.log('dataUserProf_FROM_LOCAL: ', dataUserProf);
  }

  return (
    <header className={style.header}>
      {
        dataUserProf.userName ?
          <div className={style.header__container}>
            <img
              className={style.header__logo_auth}
              src={logo}
              alt="Логотип галереи"
              onClick={() => {
                navigate('/');
              }}
            />
            <div className={style.userProf}>
              <p>{dataUserProf.userName}</p>
              <img
                className={style.userProfImg}
                src={dataUserProf.userAvatar}
                alt="вы&nbsp;авторизованы"
              />
              {/* {console.log('авторизация успешна')} */}
            </div>
            <a
              className={style.header__login}
              onClick={notAuth}
            />
          </div> :
          <div className={style.header__container}>
            <img
              className={style.header__logo}
              src={logo}
              alt="Логотип галереи"
              onClick={() => {
                navigate('/');
              }} />
            <div className={style.userProf}>
              <p>вы не авторизованы</p>
              <img
              // className={style.userProfImg}
              // src={dataUserProf.userAvatar}
              // alt=""
              />
            </div>
            <a
              className={style.header__login_auth}
              // href={urlAuth.href} так делать ненадо!!!
              onClick={auth}
            />
          </div>
      }
    </header>
  );
};
