import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Story from 'src/story/components/Story';

import actions from './StoryContainer.reducer';
import thunk from './StoryContainer.thunk';
import { getControl } from './StoryContainer.selectors';

function StoryContainer({ storyId }) {
  const dispatch = useDispatch();
  const control = useSelector(getControl());

  useEffect(() => {
    dispatch(thunk(storyId));
    return () => dispatch(actions.clear());
  }, [dispatch, storyId]);

  if (control.status === 'fetching') {
    return <p>Loading...</p>;
  }

  return <Story storyId={storyId} />;
}

StoryContainer.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default StoryContainer;
