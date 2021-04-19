import LayoutApp from 'src/components/layout-app';
import LayoutContent from 'src/components/layout-content';
import LayoutHead from 'src/components/layout-head';
import LayoutMain from 'src/components/layout-main';
import LayoutMenu from 'src/components/layout-menu';
import LayoutSidebar from 'src/components/layout-sidebar';

import Loader from 'src/components/loader';

import FeedStories from 'src/containers/feed-stories';
import Navbar from 'src/containers/navbar';

export default function Home() {
  return (
    <LayoutApp>
      <LayoutHead />

      <Navbar />

      <LayoutContent>
        <LayoutMenu />

        <LayoutMain>
          <Loader action="HOME_PAGE" cancellable />
          <FeedStories feedId="articles" />
        </LayoutMain>

        <LayoutSidebar />
      </LayoutContent>
    </LayoutApp>
  );
}
