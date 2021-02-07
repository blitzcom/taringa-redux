import Head from 'next/head';

import ArticlesContainer from 'src/containers/home/articles/ArticlesContainer';

import App from 'src/common/app';
import Content from 'src/common/content';
import Navbar from 'src/common/navbar';

export default function Home() {
  return (
    <App>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Content>
        <ArticlesContainer />
      </Content>
    </App>
  );
}
