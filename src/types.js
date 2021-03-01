import PropTypes from 'prop-types';

const control = PropTypes.shape({
  status: PropTypes.oneOf(['loading', 'loaded', 'failure']),
});

const feed = PropTypes.shape({
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export default {
  control,
  feed,
};
