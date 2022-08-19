import style from './List.module.css';
import { Post } from '../Post/Post';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { postsAsync } from '../../store/posts/postsAction';
import Masonry from 'react-masonry-css';


export const List = () => {
  const posts = useSelector(state => state.postsReducer.data);
  // console.log('posts: ', posts);

  const dispatch = useDispatch();
  const endList = useRef();

  useEffect(() => {
    let i = 1;
    if (!posts.length) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio === 1) return;
      if (entries[0].isIntersecting) {
        // console.log('entries[0].isIntersecting: ', entries[0]);
        i += 1;
        // console.log('i: ', i);
        dispatch(postsAsync({ page: i, count: 30 }));
        // console.log('jjjjjjjjjjjjjj');
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);


  const breakpointColumnsObj = {
    default: 5,
    1100: 5,
    800: 3,
    700: 2,
    500: 1
  };


  return (
    <>
      <div className={style.mymasonryContainer}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={style.mymasonrygrid}
          columnClassName={style.mymasonrygrid_column}>
          {
            (posts.map((item) => (
              <Post key={`${item.id}${Math.random()}`} postData={item} />
            )))
          }
          <li className={style.end} ref={endList} />
        </Masonry>
      </div>
      <Outlet />
      {/* {console.log('загрузился элемент "list"')} */}
    </>
  );
};
