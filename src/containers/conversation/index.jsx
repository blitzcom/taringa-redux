import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Conversation from 'src/components/conversation';
import Thread from 'src/components/thread';

function ConversationContainer({ storyId }) {
  const conversation = useSelector((state) =>
    selectEntity(state, 'conversations', storyId),
  );

  const control = useSelector((state) =>
    selectControl(state, 'conversations', storyId),
  );

  if (control?.status === 'loaded') {
    return (
      <Conversation count={conversation.totalCount}>
        {conversation.items.map((commentId) => (
          <Thread key={commentId} commentId={commentId} />
        ))}
      </Conversation>
    );
  }

  return null;
}

ConversationContainer.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default ConversationContainer;
