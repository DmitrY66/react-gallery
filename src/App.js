import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
// import { usePosts } from './hooks/usePosts';
import { useToken } from './hooks/useToken';
import { postsAsync } from './store/posts/postsAction';

const App = () => {
  useToken();
  // usePosts();
  const dispatch = useDispatch();
  dispatch(postsAsync({ page: 1, count: 30 }));

  return (
    <Routes>
      <Route
        path='*'
        element={
          <>
            <Header />
            <Main />
          </>
        } />
    </Routes>
  );
};

export default App;
