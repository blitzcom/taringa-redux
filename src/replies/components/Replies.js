import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Reply from 'src/reply/components/Reply';

import { getReplyStream } from 'src/replies/Replies.selectors';

function Replies({ commentId }) {
  const stream = useSelector(getReplyStream(commentId));

  return (
    <ul>
      {stream.items.map((replyId) => (
        <Reply key={replyId} replyId={replyId} />
      ))}
    </ul>
  );
}

Replies.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default Replies;
