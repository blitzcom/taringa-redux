import Head from 'next/head';

import App from 'src/atoms/app';
import Content from 'src/atoms/content';
import Navbar from 'src/organisms/navbar';

import Loader from 'src/containers/home/loader';

import FeedStories from 'src/organisms/feed-stories';

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
        <FeedStories feedId="articles" />
      </Content>
    </App>
  );
}
