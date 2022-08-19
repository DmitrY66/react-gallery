import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postsAsync } from '../store/posts/postsAction';

export const usePosts = () => {
  // const token = useSelector(state => state.tokenReducer.token);
  const posts = useSelector(state => state.postsReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsAsync({ page: 1, count: 10 }));
  }, []);

  return posts;
};
