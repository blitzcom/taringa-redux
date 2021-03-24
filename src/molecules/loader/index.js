import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Loader({ action, payload, cancellable }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: `LOAD_${action}`, payload });

    if (cancellable) {
      return () => dispatch({ type: `CANCEL_${action}` });
    }

    return () => {};
  }, [dispatch, action, cancellable, payload]);

  return null;
}

Loader.propTypes = {
  action: PropTypes.string.isRequired,
  cancellable: PropTypes.bool,
  payload: PropTypes.string,
};

Loader.defaultProps = {
  cancel: false,
  payload: '',
};

export default Loader;
