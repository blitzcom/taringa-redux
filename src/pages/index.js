import Head from 'next/head';

import styles from '@styles/Home.module.css';

import feedActions from '@reducers/pages/home/feed';
import postsActions from '@reducers/pages/home/posts';

import HomeFeed from '@organisms/feeds/HomeFeed';
import LoaderStories from '@molecules/loaders/LoaderStories';

const POSTS = 'global?count=20&filter=article&nsfw=false&period=week&sort=tops';
const FEED =
  'list/globalHome?count=35&filter=article&sort=bigbang1d&globalSafe=true&nsfw=false';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoaderStories
        actions={feedActions}
        component={HomeFeed}
        name="feed"
        scope="home"
        url={FEED}
      />

      <LoaderStories
        actions={postsActions}
        component={HomeFeed}
        name="posts"
        scope="home"
        url={POSTS}
      />
    </div>
  );
}
