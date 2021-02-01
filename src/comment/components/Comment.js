import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Commentable from 'src/commentable/components/Commentable';
import Replies from 'src/replies/components/Replies';

import { getComment } from 'src/comment/Comment.selectors';

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
