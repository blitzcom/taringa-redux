import PropTypes from 'prop-types';

import LoaderUser from '@loaders/LoaderUser';
import User from '@molecules/User';

function Commentable({ body, owner }) {
  return (
    <article>
      <header>
        <LoaderUser userId={owner} component={User} /> commented:
      </header>

      <p>{body || 'Comment not available'}</p>
    </article>
  );
}

Commentable.propTypes = {
  body: PropTypes.string,
  owner: PropTypes.string,
};

export default Commentable;
