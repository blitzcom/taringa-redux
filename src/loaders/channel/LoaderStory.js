import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import thunk from '@thunks/story';

import Story from '@organisms/stories/Story';

function LoaderStory({ storyId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (storyId) {
      dispatch(thunk(storyId));
    }
  }, [storyId]);

  return <Story />;
}

LoaderStory.propTypes = {
  storyId: PropTypes.string,
};

export default LoaderStory;
