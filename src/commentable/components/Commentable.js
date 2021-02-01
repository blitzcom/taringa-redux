import PropTypes from 'prop-types';

import User from 'src/user/components/User';

function Commentable({ body, owner }) {
  return (
    <article>
      <p>
        <User userId={owner} />: {body || 'Unavailable comment'}
      </p>
    </article>
  );
}

Commentable.propTypes = {
  body: PropTypes.string,
  owner: PropTypes.string,
};

export default Commentable;
