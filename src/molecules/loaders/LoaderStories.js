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

export default LoaderStories;
