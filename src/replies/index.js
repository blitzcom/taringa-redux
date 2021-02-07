import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Reply from 'src/reply';

import { getReplyStream } from 'src/replies/Replies.selectors';

import Replies from './component';

function RepliesContainer({ commentId }) {
  const stream = useSelector(getReplyStream(commentId));

  return <Replies component={Reply} items={stream.items} />;
}

RepliesContainer.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default RepliesContainer;
