import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Comment from 'src/comment';

import { getCommentStream } from 'src/comments/Comments.selectors';

import List from './component';

function ListContainer({ storyId }) {
  const stream = useSelector(getCommentStream(storyId));

  return <List component={Comment} items={stream.items} />;
}

ListContainer.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default ListContainer;
