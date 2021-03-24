import Button from '.';

export default {
  title: 'atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click Me!',
};
