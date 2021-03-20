import Head from 'next/head';
import { useRouter } from 'next/router';

import App from 'src/atoms/app';
import Content from 'src/atoms/content';
import Navbar from 'src/organisms/navbar';

import Story from 'src/organisms/story/container';
import Conversation from 'src/organisms/conversation';

import Loader from 'src/containers/channel/slug/loader';

export default function Home() {
  const router = useRouter();
  const { slug = '' } = router.query;
  const [, storyId] = slug.split('_');

  return (
    <App>
      <Head>
        <title>Story Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Content>
        {storyId && <Loader payload={storyId} />}
        {storyId && <Story storyId={storyId} />}
        {storyId && <Conversation storyId={storyId} />}
      </Content>
    </App>
  );
}
