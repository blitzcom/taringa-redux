import Head from 'next/head';

import LoaderStory from '@loaders/channel/LoaderStory';
import LoaderComments from '@loaders/comments/LoaderComments';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Story Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoaderStory />
      <LoaderComments />
    </div>
  );
}
