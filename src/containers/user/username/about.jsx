import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import UserAbout from 'src/organisms/user/user-about';

import selectControl from 'src/selectors/select-control';

function About({ username }) {
  const control = useSelector((state) =>
    selectControl(state, 'users', username),
  );

  if (control?.status === 'loaded') {
    return <UserAbout username={username} />;
  }

  return null;
}

About.propTypes = {
  username: PropTypes.string.isRequired,
};

export default About;
