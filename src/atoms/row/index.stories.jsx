import Row from '.';

export default {
  title: 'atoms/Row',
  component: Row,
};

const Template = (args) => (
  <div style={{ border: '2px solid pink' }}>
    <Row {...args} />
    <Row {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <h1>Row</h1>

      <p>Extra content</p>
    </>
  ),
};
