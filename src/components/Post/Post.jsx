import PropTypes from 'prop-types';
import style from './Post.module.css';
import { Preview } from '../Preview/Preview';
import { Author } from '../Author/Author';
import { Date } from '../Date/Date';
import { Like } from '../Like/Like';

export const Post = ({ postData }) => {
  const {
    urls,
    user,
    created_at,
    likes,
    id,
  } = postData;

  return (
    <li className={style.post}>
      <Preview prevLink={urls.thumb} idPost={id} urls={urls}/>
      <Author userName={user.name} userLink={user.links.html} />
      <Date createDate={created_at}/>
      <Like likes={likes}/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
