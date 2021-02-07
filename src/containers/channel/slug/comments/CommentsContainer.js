import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Comments from 'src/comments/list';

import actions from './CommentsContainer.reducer';
import thunk from './CommentsContainer.thunk';
import { getControl } from './CommentsContainer.selectors';

function CommentsContainer({ storyId }) {
  const dispatch = useDispatch();
  const control = useSelector(getControl());

  useEffect(() => {
    dispatch(thunk(storyId));
    return () => dispatch(actions.clear());
  }, [dispatch, storyId]);

  if (control.status === 'fetching') {
    return <p>Loading...</p>;
  }

  return <Comments storyId={storyId} />;
}

CommentsContainer.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default CommentsContainer;
