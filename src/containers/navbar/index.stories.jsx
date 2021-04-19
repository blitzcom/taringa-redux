import Navbar from '.';

export default {
  title: 'organisms/navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
