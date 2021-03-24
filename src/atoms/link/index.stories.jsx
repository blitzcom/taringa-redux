import Link from '.';

export default {
  title: 'atoms/Link',
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "I'm a link",
  href: '#',
};
