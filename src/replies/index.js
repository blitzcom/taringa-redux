import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Reply from 'src/reply';

import Replies from './component';
import selectEntity from 'src/selectors/select-entity';

function RepliesContainer({ commentId }) {
  const feed = useSelector((state) =>
    selectEntity(state, 'feeds', `comment-replies-${commentId}`),
  );

  return <Replies component={Reply} items={feed.items} />;
}

RepliesContainer.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default RepliesContainer;
