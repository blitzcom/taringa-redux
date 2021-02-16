import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { load, clean } from './thunk';

function Loader({ channelId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load(channelId));

    return () => dispatch(clean());
  }, [channelId, dispatch]);

  return null;
}

Loader.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default Loader;
