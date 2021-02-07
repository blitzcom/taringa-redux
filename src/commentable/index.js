import PropTypes from 'prop-types';

import User from 'src/user/components/User';
import UserAvatar from 'src/user/avatar';

import Commentable from './component';

function CommentableContainer({ body, owner }) {
  return (
    <Commentable
      body={body}
      owner={<User userId={owner} />}
      avatar={<UserAvatar userId={owner} />}
    />
  );
}

CommentableContainer.propTypes = {
  body: PropTypes.string,
  owner: PropTypes.string,
};

export default CommentableContainer;
