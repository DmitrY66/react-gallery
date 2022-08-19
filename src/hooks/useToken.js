import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tokenAsync } from '../store/token/tokenAction';

export const useToken = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tokenAsync());
  }, []);
};

