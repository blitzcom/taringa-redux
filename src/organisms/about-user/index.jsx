import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import Line from 'src/atoms/line';
import Spinner from 'src/atoms/spinner';
import Void from 'src/atoms/void';

import AboutUser from './component';

function UserAboutContainer({ children, username }) {
  const control = useSelector((state) =>
    selectControl(state, 'users', username),
  );

  const user = useSelector((state) => selectEntity(state, 'users', username));

  if (control?.status === 'loaded') {
    return (
      <>
        <AboutUser username={user.username} message={user.message} />
        <Line />
        {children}
      </>
    );
  }

  return (
    <Void>
      <Spinner />
    </Void>
  );
}

UserAboutContainer.propTypes = {
  username: PropTypes.string.isRequired,
  children: PropTypes.node,
};

UserAboutContainer.defaultProps = {
  children: null,
};

export default UserAboutContainer;
