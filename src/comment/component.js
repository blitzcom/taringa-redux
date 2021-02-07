import PropTypes from 'prop-types';

import style from './style.module.css';

function Comment({ children, commentable }) {
  return (
    <li className={style.li}>
      {commentable}
      {children}
    </li>
  );
}

Comment.propTypes = {
  children: PropTypes.node.isRequired,
  commentable: PropTypes.node.isRequired,
};

export default Comment;
