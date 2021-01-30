import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Reply from '@molecules/Reply';

function RepliesList({ commentId }) {
  const replies = useSelector(
    (state) => state.streams.replies.entities[commentId],
  );

  if (!replies) {
    return null;
  }

  return (
    <ul>
      {replies.items.map((id) => (
        <Reply key={id} replyId={id} />
      ))}
    </ul>
  );
}

RepliesList.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default RepliesList;
