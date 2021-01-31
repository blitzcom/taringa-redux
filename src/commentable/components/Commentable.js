import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getUser } from 'user/User.selectors';

function Commentable({ body, owner }) {
  const user = useSelector(getUser(owner));

  return (
    <article>
      <p>
        <b>{user.username}</b>: {body || 'Unavailable comment'}
      </p>
    </article>
  );
}

Commentable.propTypes = {
  body: PropTypes.string,
  owner: PropTypes.string,
};

export default Commentable;
