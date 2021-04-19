import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import Avatar from 'src/components/avatar';
import Link from 'src/components/link';

import style from './style.module.scss';

export function Comment({ avatar, user, body }) {
  return (
    <article className={style.commentable}>
      {avatar}

      <div className={style.details}>
        {user}

        <p className={style.body}>{body || 'Unavailable comment'}</p>
      </div>
    </article>
  );
}

Comment.propTypes = {
  avatar: PropTypes.node.isRequired,
  user: PropTypes.node.isRequired,
  body: PropTypes.string,
};

Comment.defaultProps = {
  body: null,
};

function CommentContainer({ entityId, source }) {
  const comment = useSelector((state) => selectEntity(state, source, entityId));

  const owner = useSelector((state) =>
    selectEntity(state, 'users', comment.owner),
  );

  return (
    <Comment
      avatar={<Avatar src={owner.avatar} rounded />}
      body={comment.body}
      user={
        <Link href={`/u/${owner.username}`}>
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
