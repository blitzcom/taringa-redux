import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Commentable from 'src/commentable';

import { getReply } from 'src/reply/Reply.selectors';

import Reply from './component';

function ReplyContainer({ replyId }) {
  const reply = useSelector(getReply(replyId));

  return (
    <Reply>
      <Commentable body={reply.body} owner={reply.owner} />
    </Reply>
  );
}

ReplyContainer.propTypes = {
  replyId: PropTypes.string.isRequired,
};

export default ReplyContainer;
