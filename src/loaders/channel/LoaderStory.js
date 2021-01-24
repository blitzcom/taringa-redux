import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import thunk from '@thunks/story';

import Story from '@organisms/stories/Story';

function LoaderStory() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug = '' } = router.query;
  const [, storyId] = slug.split('_');

  useEffect(() => {
    if (storyId) {
      dispatch(thunk(storyId));
    }
  }, [storyId]);

  return <Story />;
}

export default LoaderStory;
