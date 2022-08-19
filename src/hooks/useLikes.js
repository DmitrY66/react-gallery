import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLikeAsynk } from '../store/likes/likesAction';

export const useLikes = (id) => {
  // const token = useSelector(state => state.tokenReducer.token);
  const likePlus = useSelector(state => state.likesReducer.likePlus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addLikeAsynk(id));
  }, [likePlus]);

  return likePlus;
};
