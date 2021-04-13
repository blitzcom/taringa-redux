import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import agent from 'src/agent';

import LayoutApp from 'src/atoms/layout/layout-app';
import LayoutContent from 'src/atoms/layout/layout-content';
import LayoutHead from 'src/atoms/layout/layout-head';
import LayoutMain from 'src/atoms/layout/layout-main';
import LayoutMenu from 'src/atoms/layout/layout-menu';
import LayoutSidebar from 'src/atoms/layout/layout-sidebar';

import Loader from 'src/molecules/loader';

import AboutChannelContainer from 'src/organisms/about-channel';
import FeedStories from 'src/organisms/feed-stories';
import Navbar from 'src/organisms/navbar';

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
          <AboutChannelContainer channelId={source}>
            <FeedStories feedId={source} />
          </AboutChannelContainer>
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
