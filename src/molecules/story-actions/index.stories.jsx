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
  votes: '10.2k',
  comments: '594',
  shares: '855',
  bookmarks: '1.2k',
};
