import Thumbnail from '.';

export default {
  title: 'atoms/Thumbnail',
  component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

export const Default = Template.bind({});

Default.args = {
  src:
    'https://media.taringa.net/knn/crop:150x115/Z3M6Ly9rbjMvNWUwZTI1MzA4YjI5ZWZkZGI0Y2NjMDVlNTYxYWUwNGQuanBn',
};
