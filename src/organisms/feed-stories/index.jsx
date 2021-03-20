import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Article from 'src/components/article';

import selectEntity from 'src/selectors/select-entity';
import selectControl from 'src/selectors/select-control';

import Paper from 'src/atoms/paper';
import Box from 'src/atoms/box';
import Spinner from 'src/atoms/spinner';

function FeedStory({ feedId }) {
  const control = useSelector((state) => selectControl(state, 'feeds', feedId));
  const feed = useSelector((state) => selectEntity(state, 'feeds', feedId));

  if (control?.status === 'loaded') {
    return (
      <Paper>
        {feed.items.map((id) => (
          <Article key={id} itemId={id} />
        ))}
      </Paper>
    );
  }

  return (
    <Box display="flex" justify="center">
      <Spinner />
    </Box>
  );
}

FeedStory.propTypes = {
  feedId: PropTypes.string.isRequired,
};

export default FeedStory;
