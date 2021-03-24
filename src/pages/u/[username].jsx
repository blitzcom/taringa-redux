import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

import App from 'src/atoms/app';
import Content from 'src/atoms/content';
import Navbar from 'src/organisms/navbar';

import UsernameAbout from 'src/containers/user/username/about';
import Loader from 'src/molecules/loader';

import FeedStories from 'src/organisms/feed-stories';

export default function Username({ username }) {
  const { query } = useRouter();

  return (
    <App>
      <Head>
        <title>{username} | Taringa!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Content>
        <Loader payload={query.username} action="USERNAME_PAGE" cancellable />
        <UsernameAbout username={query.username} />
        <FeedStories feedId={query.username} />
      </Content>
    </App>
  );
}

Username.propTypes = {
  username: PropTypes.string.isRequired,
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
