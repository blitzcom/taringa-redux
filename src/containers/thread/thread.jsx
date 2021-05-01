import PropTypes from 'prop-types';

import Thread from 'src/components/thread';

import CommentContainer from 'src/containers/comment';
import RepliesContainer from 'src/containers/replies';

function ThreadContainer({ commentId }) {
  return (
    <Thread>
      <CommentContainer entityId={commentId} source="comments" />
      <RepliesContainer commentId={commentId} />
    </Thread>
  );
}

ThreadContainer.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default ThreadContainer;
