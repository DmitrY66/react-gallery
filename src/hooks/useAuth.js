/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authAsync } from '../store/auth/authAction';
// import { HOME_URL } from '../api/consts';
// import { tokenClearAsync } from '../store/token/tokenAction';
// import authSlice from '../store/auth/authSlice';

export const useAuth = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const dataUserProf = useSelector(state => state.authReducer.dataUserProfile);
  const loading = useSelector(state => state.authReducer.loading);
  const dispatch = useDispatch();

  // console.log('сработал useAuth из useAuth');

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      dispatch(authAsync());
    }
  }, [token]);

  return [dataUserProf, loading];
};

