import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Commentable from 'src/commentable';
import Replies from 'src/replies';

import { getComment } from 'src/comment/Comment.selectors';

import Comment from './component';

function CommentContainer({ commentId }) {
  const comment = useSelector(getComment(commentId));

  return (
    <Comment
      commentable={<Commentable body={comment.body} owner={comment.owner} />}
    >
      <Replies commentId={commentId} />
    </Comment>
  );
}

CommentContainer.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default CommentContainer;
