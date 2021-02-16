import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Loader({ channelId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_CHANNEL_PAGE', payload: channelId });

    return () => dispatch({ type: 'CANCEL_CHANNEL_PAGE' });
  }, [channelId, dispatch]);

  return null;
}

Loader.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default Loader;
