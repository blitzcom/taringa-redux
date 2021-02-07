import Head from 'next/head';
import { useRouter } from 'next/router';

import CommentsContainer from 'src/containers/channel/slug/comments/CommentsContainer';
import StoryContainer from 'src/containers/channel/slug/story/StoryContainer';

import App from 'src/common/app';
import Content from 'src/common/content';
import Navbar from 'src/common/navbar';

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
        {storyId && <StoryContainer storyId={storyId} />}
        {storyId && <CommentsContainer storyId={storyId} />}
      </Content>
    </App>
  );
}
