import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Commentable from 'src/commentable/components/Commentable';

import { getReply } from 'src/reply/Reply.selectors';

function Reply({ replyId }) {
  const reply = useSelector(getReply(replyId));

  return (
    <li>
      <Commentable body={reply.body} owner={reply.owner} />
    </li>
  );
}

Reply.propTypes = {
  replyId: PropTypes.string.isRequired,
};

export default Reply;
