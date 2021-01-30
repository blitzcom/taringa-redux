import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Commentable from '@molecules/Commentable';

function Reply({ replyId }) {
  const reply = useSelector((state) => state.objects.replies.entities[replyId]);

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
