import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Box from 'src/atoms/box';
import Paper from 'src/atoms/paper';
import Spinner from 'src/atoms/spinner';
import Spot from 'src/atoms/spot';

import RowArticleContainer from 'src/molecules/row-article';

function FeedStory({ items, component: Component }) {
  return (
    <Paper flat>
      {items.map((id) => (
        <Component key={id} itemId={id} />
      ))}
    </Paper>
  );
}

FeedStory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  component: PropTypes.elementType,
};

FeedStory.defaultProps = {
  component: RowArticleContainer,
};

function FeedStoryContainer({ feedId }) {
  const control = useSelector((state) => selectControl(state, 'feeds', feedId));
  const feed = useSelector((state) => selectEntity(state, 'feeds', feedId));

  if (control?.status === 'loaded') {
    return (
      <Spot>
        <FeedStory items={feed.items} />
      </Spot>
    );
  }

  return (
    <Spot>
      <Box display="flex" justify="center">
        <Spinner />
      </Box>
    </Spot>
  );
}

FeedStoryContainer.propTypes = {
  feedId: PropTypes.string.isRequired,
};

export default FeedStoryContainer;
