import PropTypes from 'prop-types';
import Head from 'next/head';

import styles from 'src/styles/Home.module.css';

export default function Home({ title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | Taringa!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Channel page</p>
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
