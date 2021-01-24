import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import thunk from '@thunks/feed';

function LoaderStories({ actions, url, name, component: Component, scope }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunk(name, url, actions));
  }, []);

  return <Component name={name} scope={scope} />;
}

LoaderStories.propTypes = {
  actions: PropTypes.shape({
    failure: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
    success: PropTypes.func.isRequired,
  }).isRequired,
  component: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  scope: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default LoaderStories;
