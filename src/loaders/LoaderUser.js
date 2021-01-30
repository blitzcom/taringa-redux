import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

function LoaderUser({ component, userId }) {
  const user = useSelector((state) => state.objects.users.entities[userId]);
  return React.createElement(component, user);
}

LoaderUser.propTypes = {
  component: PropTypes.elementType,
  userId: PropTypes.string.isRequired,
};

export default LoaderUser;
