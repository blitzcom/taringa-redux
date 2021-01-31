import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Comment from 'comment/components/Comment';

import { getCommentStream } from 'comments/Comments.selectors';

function Comments({ storyId }) {
  const stream = useSelector(getCommentStream(storyId));

  return (
    <section>
      <h2>Comments</h2>

      <ul>
        {stream.items.map((commentId) => (
          <Comment key={commentId} commentId={commentId} />
        ))}
      </ul>
    </section>
  );
}

Comments.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default Comments;
