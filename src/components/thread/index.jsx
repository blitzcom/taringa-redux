import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';

import CommentContainer from 'src/components/comment';

import style from './style.module.css';

function Thread({ commentId }) {
  const thread = useSelector((state) =>
    selectEntity(state, 'threads', commentId),
  );

  return (
    <li className={style.li}>
      <CommentContainer entityId={commentId} source="comments" />

      <ul>
        {thread.items.map((replyId) => (
          <CommentContainer key={replyId} entityId={replyId} source="replies" />
        ))}
      </ul>
    </li>
  );
}

Thread.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default Thread;
