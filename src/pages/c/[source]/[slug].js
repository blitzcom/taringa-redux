import Head from 'next/head';
import { useRouter } from 'next/router';

import CommentsContainer from 'src/containers/channel/slug/comments/CommentsContainer';
import StoryContainer from 'src/containers/channel/slug/story/StoryContainer';

export default function Home() {
  const router = useRouter();
  const { slug = '' } = router.query;
  const [, storyId] = slug.split('_');

  return (
    <div>
      <Head>
        <title>Story Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {storyId && <StoryContainer storyId={storyId} />}
      {storyId && <CommentsContainer storyId={storyId} />}
    </div>
  );
}
