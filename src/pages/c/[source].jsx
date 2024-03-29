import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import agent from 'src/agent';

import LayoutApp from 'src/components/layout-app';
import LayoutContent from 'src/components/layout-content';
import LayoutHead from 'src/components/layout-head';
import LayoutMain from 'src/components/layout-main';
import LayoutMenu from 'src/components/layout-menu';
import LayoutSidebar from 'src/components/layout-sidebar';

import Loader from 'src/components/loader';

import AboutChannel from 'src/containers/about-channel';
import FeedStories from 'src/containers/feed-stories';
import Navbar from 'src/containers/navbar';

export default function Home({ title }) {
  const { query } = useRouter();
  const { source } = query;

  return (
    <LayoutApp>
      <LayoutHead>
        <title key="title">{title} | Taringa!</title>
      </LayoutHead>

      <Navbar />

      <LayoutContent>
        <LayoutMenu />

        <LayoutMain>
          <Loader payload={source} action="CHANNEL_PAGE" cancellable />
          <AboutChannel channelId={source}>
            <FeedStories feedId={source} />
          </AboutChannel>
        </LayoutMain>

        <LayoutSidebar />
      </LayoutContent>
    </LayoutApp>
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
