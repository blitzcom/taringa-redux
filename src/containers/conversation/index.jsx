import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Thread from 'src/molecules/thread';

import style from './style.module.css';

function Conversation({ storyId }) {
  const conversation = useSelector((state) =>
    selectEntity(state, 'conversations', storyId),
  );

  const control = useSelector((state) =>
    selectControl(state, 'conversations', storyId),
  );

  if (control?.status === 'loaded') {
    return (
      <section className={style.section}>
        <div className={style.header}>
          <h2 className={style.title}>Conversation</h2>
        </div>

        <ul className={style.list}>
          {conversation.items.map((commentId) => (
            <Thread key={commentId} commentId={commentId} />
          ))}
        </ul>
      </section>
    );
  }

  return null;
}

Conversation.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default Conversation;
