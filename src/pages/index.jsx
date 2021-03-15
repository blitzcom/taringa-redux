import Head from 'next/head';

import App from 'src/common/app';
import Content from 'src/common/content';
import Navbar from 'src/common/navbar';

import Loader from 'src/containers/home/loader';

import FeedStory from 'src/organisms/feed-story/container';

export default function Home() {
  return (
    <App>
      <Head>
        <title>Taringa! - Inteligencia Colectiva</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Content>
        <Loader />
        <FeedStory uniqueID="articles" />
      </Content>
    </App>
  );
}
