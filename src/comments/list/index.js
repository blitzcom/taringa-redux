import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Comment from 'src/comment';

import selectEntity from 'src/selectors/select-entity';

import List from './component';

function ListContainer({ storyId }) {
  const feed = useSelector((state) =>
    selectEntity(state, 'feeds', `story-comments-${storyId}`),
  );

  return <List component={Comment} items={feed.items} />;
}

ListContainer.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default ListContainer;
