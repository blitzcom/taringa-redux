import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Avatar from 'src/atoms/avatar';

import selectEntity from 'src/selectors/select-entity';
import LinkUser from '../link-user';

import style from './style.module.css';

function Comment({ entityId, source }) {
  const comment = useSelector((state) => selectEntity(state, source, entityId));

  return (
    <article className={style.commentable}>
      <Avatar entityId={comment.owner} source="users" />

      <div className={style.details}>
        <LinkUser username={comment.owner} />

        <p className={style.body}>{comment.body || 'Unavailable comment'}</p>
      </div>
    </article>
  );
}

Comment.propTypes = {
  entityId: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Comment;
