import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Commentable from 'commentable/components/Commentable';
import Replies from 'replies/components/Replies';

import { getComment } from 'comment/Comment.selectors';

function Comment({ commentId }) {
  const comment = useSelector(getComment(commentId));

  return (
    <li>
      <Commentable body={comment.body} owner={comment.owner} />
      <Replies commentId={commentId} />
    </li>
  );
}

Comment.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default Comment;
