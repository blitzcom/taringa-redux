import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Commentable from 'src/commentable';
import Replies from 'src/replies';

import Comment from './component';
import selectEntity from 'src/selectors/select-entity';

function CommentContainer({ commentId }) {
  const comment = useSelector((state) =>
    selectEntity(state, 'comments', commentId),
  );

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
