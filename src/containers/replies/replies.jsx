import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import Replies from 'src/components/replies';
import Reply from 'src/components/reply';

import CommentContainer from 'src/containers/comment';

function RepliesContainer({ commentId }) {
  const thread = useSelector((state) =>
    selectEntity(state, 'threads', commentId),
  );

  if (thread.items.length === 0) {
    return null;
  }

  return (
    <Replies>
      {thread.items.map((replyId) => (
        <Reply key={replyId}>
          <CommentContainer entityId={replyId} source="replies" />
        </Reply>
      ))}
    </Replies>
  );
}

RepliesContainer.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default RepliesContainer;
