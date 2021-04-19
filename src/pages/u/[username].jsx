import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import agent from 'src/agent';

import LayoutApp from 'src/components/layout/layout-app';
import LayoutContent from 'src/components/layout/layout-content';
import LayoutHead from 'src/components/layout/layout-head';
import LayoutMain from 'src/components/layout/layout-main';
import LayoutMenu from 'src/components/layout/layout-menu';
import LayoutSidebar from 'src/components/layout/layout-sidebar';

import Loader from 'src/molecules/loader';

import AboutUserContainer from 'src/organisms/about-user';
import FeedStories from 'src/organisms/feed-stories';
import Navbar from 'src/organisms/navbar';

export default function Username({ username }) {
  const { query } = useRouter();

  return (
    <LayoutApp>
      <LayoutHead>
        <title key="title">{username} | Taringa!</title>
      </LayoutHead>

      <Navbar />

      <LayoutContent>
        <LayoutMenu />

        <LayoutMain>
          <Loader payload={query.username} action="USERNAME_PAGE" cancellable />
          <AboutUserContainer username={query.username}>
            <FeedStories feedId={query.username} />
          </AboutUserContainer>
        </LayoutMain>

        <LayoutSidebar />
      </LayoutContent>
    </LayoutApp>
  );
}

Username.propTypes = {
  username: PropTypes.string.isRequired,
};

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const [user, status] = await agent.get(`/user/${params.username}/about`);

  if (status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      username: user.username,
    },
    revalidate: 60,
  };
}
