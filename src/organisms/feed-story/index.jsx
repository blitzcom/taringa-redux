import PropTypes from 'prop-types';

import Types from 'src/types';

import Paper from 'src/atoms/paper';
import Box from 'src/atoms/box';
import Spinner from 'src/atoms/spinner';

function FeedStory({ Component, control, feed }) {
  if (control?.status === 'loaded') {
    return (
      <Paper>
        {feed.items.map((id) => (
          <Component key={id} itemId={id} />
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
  Component: PropTypes.elementType.isRequired,
  control: Types.control,
  feed: Types.feed,
};

FeedStory.defaultProps = {
  control: null,
  feed: null,
};

export default FeedStory;
