import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import Avatar from 'src/components/avatar';
import ButtonVoting from 'src/components/button-voting';
import Comment from 'src/components/comment';
import Link from 'src/components/link';

function CommentContainer({ entityId, source }) {
  const comment = useSelector((state) => selectEntity(state, source, entityId));

  const owner = useSelector((state) =>
    selectEntity(state, 'users', comment.owner),
  );

  // TODO: Connect ButtonVoting with sagas.

  return (
    <Comment
      actions={
        <ButtonVoting upvotes={comment.upvotes} downvotes={comment.downvotes} />
      }
      created={comment.displayCreated}
      avatar={<Avatar src={owner.avatar} rounded />}
      body={comment.body}
      user={
        <Link href={owner.url}>
          <b>{owner.username}</b>
        </Link>
      }
    />
  );
}

CommentContainer.propTypes = {
  entityId: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default CommentContainer;
