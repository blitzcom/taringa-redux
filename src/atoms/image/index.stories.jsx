import Image from '.';

export default {
  title: 'atoms/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  src:
    'https://media.taringa.net/knn/fit:550/aHR0cHM6Ly9rNDYua24zLm5ldC90YXJpbmdhLzEvOS84LzUvNi83LzY4L2Rhc2hhcmNvaXJpcy9CMzIuanBn',
  width: 329,
  height: 447,
  widthStyle: { maxWidth: 329 },
  paddingStyle: { paddingBottom: `${(447 / 329) * 100}%` },
};
