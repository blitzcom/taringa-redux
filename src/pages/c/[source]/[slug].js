import Head from 'next/head';
import { useRouter } from 'next/router';

import LoaderStory from '@loaders/channel/LoaderStory';
import LoaderComments from '@loaders/comments/LoaderComments';

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

      <LoaderStory storyId={storyId} />
      <LoaderComments storyId={storyId} />
    </div>
  );
}
