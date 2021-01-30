import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import thunk from '@thunks/comments';

import List from '@organisms/comments/List';

function LoaderComment({ storyId }) {
  const dispatch = useDispatch();
  const control = useSelector((state) => state.pages.channel.slug.comments);
  const feed = useSelector(
    (state) => state.streams.comments.entities[control.storyId],
  );

  useEffect(() => {
    if (storyId) {
      dispatch(thunk(storyId));
    }
  }, [storyId]);

  if (control.status === 'fetching') {
    return <p>Loading comments</p>;
  }

  return <List items={feed.items} />;
}

LoaderComment.propTypes = {
  storyId: PropTypes.string,
};

export default LoaderComment;
