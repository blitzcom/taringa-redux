import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import thunk from '@thunks/comments';

function LoaderComment() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug = '' } = router.query;
  const [, storyId] = slug.split('_');

  useEffect(() => {
    if (storyId) {
      dispatch(thunk(storyId));
    }
  }, [storyId]);

  return null;
}

export default LoaderComment;
