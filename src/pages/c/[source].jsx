import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

import agent from 'src/agent';

import App from 'src/atoms/app';
import Content from 'src/atoms/content';
import Navbar from 'src/organisms/navbar';

import AboutChannel from 'src/organisms/about-channel';
import Loader from 'src/molecules/loader';

import FeedStories from 'src/organisms/feed-stories';

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
        <Loader payload={source} action="CHANNEL_PAGE" cancellable />
        <AboutChannel channelId={source} />
        <FeedStories feedId={source} />
      </Content>
    </App>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const [channel, status] = await agent.get(`/c/${params.source}/about`);

  if (status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: channel.title,
    },
    revalidate: 60,
  };
}
