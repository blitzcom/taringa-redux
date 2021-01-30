import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Replies from '@organisms/replies/RepliesList';

import Commentable from '@molecules/Commentable';

function Comment({ commentId }) {
  const comment = useSelector(
    (state) => state.objects.comments.entities[commentId],
  );

  const { body, owner } = comment;

  return (
    <li>
      <Commentable body={body} owner={owner} />
      <Replies commentId={commentId} />
    </li>
  );
}

Comment.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default Comment;
