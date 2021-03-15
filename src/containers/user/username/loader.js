import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Loader({ username }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_USERNAME_PAGE', payload: username });

    return () => dispatch({ type: 'CANCEL_USERNAME_PAGE' });
  });

  return null;
}

Loader.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Loader;
