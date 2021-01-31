import Head from 'next/head';

import styles from 'styles/Home.module.css';

import ArticlesContainer from 'containers/home/articles/ArticlesContainer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ArticlesContainer />
    </div>
  );
}
