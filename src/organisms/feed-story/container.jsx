import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectEntity from 'src/selectors/select-entity';
import selectControl from 'src/selectors/select-control';

import FeedStory from 'src/organisms/feed-story';
import Article from 'src/components/article';

function FeedStoryContainer({ uniqueID }) {
  const ctl = useSelector((state) => selectControl(state, 'feeds', uniqueID));
  const feed = useSelector((state) => selectEntity(state, 'feeds', uniqueID));

  return <FeedStory Component={Article} control={ctl} feed={feed} />;
}

FeedStoryContainer.propTypes = {
  uniqueID: PropTypes.string.isRequired,
};

export default FeedStoryContainer;
