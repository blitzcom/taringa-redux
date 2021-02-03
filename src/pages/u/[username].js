import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from 'src/styles/Home.module.css';

import AboutContainer from 'src/containers/user/username/about/AboutContainer';
import AboutArticles from 'src/containers/user/username/articles/ArticlesContainer';

export default function Username({ username }) {
  const { query } = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>{username} | Taringa!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutContainer username={query.username} />
      <AboutArticles username={query.username} />
    </div>
  );
}

Username.propTypes = {
  username: PropTypes.string,
};

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://api-user.taringa.net/user/${params.username}/about`,
  );

  if (response.status !== 200) {
    return {
      notFound: true,
    };
  }

  const user = await response.json();

  return {
    props: {
      username: user.username,
    },
    revalidate: 60,
  };
}
