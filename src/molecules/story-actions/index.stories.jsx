import StoryActions from '.';

export default {
  title: 'molecules/StoryActions',
  component: StoryActions,
};

const Template = (args) => (
  <div style={{ border: '2px solid pink', maxWidth: 550, margin: '0 auto' }}>
    <StoryActions {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  bookmarks: 45,
  comments: 345,
  downvotes: 45,
  shares: 346,
  upvotes: 999,
};
