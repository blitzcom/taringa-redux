import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

import App from 'src/common/app';
import Content from 'src/common/content';
import Navbar from 'src/common/navbar';

import AboutContainer from 'src/containers/channel/name/about';
import ArticlesContainer from 'src/containers/channel/name/articles';
import Loader from 'src/containers/channel/name/loader';

export default function Home({ title }) {
  const { query } = useRouter();
  const { source } = query;

  return (
    <App>
      <Head>
        <title>{title} | Taringa!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Content>
        <Loader channelId={source} />
        <AboutContainer />
        <ArticlesContainer />
      </Content>
    </App>
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
