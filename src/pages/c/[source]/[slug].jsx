import { useRouter } from 'next/router';

import LayoutApp from 'src/components/layout-app';
import LayoutContent from 'src/components/layout-content';
import LayoutHead from 'src/components/layout-head';
import LayoutMain from 'src/components/layout-main';
import LayoutMenu from 'src/components/layout-menu';
import LayoutSidebar from 'src/components/layout-sidebar';

import Loader from 'src/components/loader';

import Conversation from 'src/containers/conversation';
import Navbar from 'src/containers/navbar';
import Story from 'src/containers/story';

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
