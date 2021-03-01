import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Commentable from 'src/commentable';

import selectEntity from 'src/selectors/select-entity';

import Reply from './component';

function ReplyContainer({ replyId }) {
  const reply = useSelector((state) => selectEntity(state, 'replies', replyId));

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
