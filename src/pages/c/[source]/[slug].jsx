import { useRouter } from 'next/router';

import LayoutApp from 'src/atoms/layout/layout-app';
import LayoutContent from 'src/atoms/layout/layout-content';
import LayoutHead from 'src/atoms/layout/layout-head';
import LayoutMain from 'src/atoms/layout/layout-main';
import LayoutMenu from 'src/atoms/layout/layout-menu';
import LayoutSidebar from 'src/atoms/layout/layout-sidebar';

import Loader from 'src/molecules/loader';

import Conversation from 'src/organisms/conversation';
import Navbar from 'src/organisms/navbar';
import Story from 'src/organisms/story';

export default function Home() {
  const router = useRouter();
  const { slug = '' } = router.query;
  const [, storyId] = slug.split('_');

  return (
    <LayoutApp>
      <LayoutHead />

      <Navbar />

      <LayoutContent>
        <LayoutMenu />

        <LayoutMain>
          {storyId && (
            <Loader payload={storyId} action="CHANNEL_SLUG_PAGE" cancellable />
          )}
          {storyId && <Story storyId={storyId} />}
          {storyId && <Conversation storyId={storyId} />}
        </LayoutMain>

        <LayoutSidebar />
      </LayoutContent>
    </LayoutApp>
  );
}
