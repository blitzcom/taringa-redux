import LayoutApp from 'src/components/layout/layout-app';
import LayoutContent from 'src/components/layout/layout-content';
import LayoutHead from 'src/components/layout/layout-head';
import LayoutMain from 'src/components/layout/layout-main';
import LayoutMenu from 'src/components/layout/layout-menu';
import LayoutSidebar from 'src/components/layout/layout-sidebar';

import Loader from 'src/molecules/loader';

import FeedStories from 'src/organisms/feed-stories';
import Navbar from 'src/organisms/navbar';

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
