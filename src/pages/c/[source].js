import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from 'src/styles/Home.module.css';

import AboutContainer from 'src/containers/channel/name/about/AboutContainer';
import ArticlesContainer from 'src/containers/channel/name/articles/ArticlesContainer';

export default function Home({ title }) {
  const { query } = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | Taringa!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutContainer channelId={query.source} />
      <ArticlesContainer channelId={query.source} />
    </div>
  );
}

Home.propTypes = {
  title: PropTypes.string,
};

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://api-user.taringa.net/c/${params.source}/about`,
  );

  if (response.status !== 200) {
    return {
      notFound: true,
    };
  }

  const channel = await response.json();

  return {
    props: {
      title: channel.title,
    },
    revalidate: 60,
  };
}
