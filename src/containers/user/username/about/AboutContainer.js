import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserAbout from 'src/user/components/UserAbout';

import { getControl } from './AboutContainer.selectors';

import thunk from './AboutContainer.thunk';

function AboutContainer({ username }) {
  const dispatch = useDispatch();
  const control = useSelector(getControl());

  useEffect(() => {
    dispatch(thunk(username));
  }, [dispatch, username]);

  if (control.status === 'fetching') {
    return <p>Loading...</p>;
  }

  return <UserAbout userId={control.userId} />;
}

AboutContainer.propTypes = {
  username: PropTypes.string.isRequired,
};

export default AboutContainer;
