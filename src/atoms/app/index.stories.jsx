import App from '.';

export default {
  title: 'atoms/App',
  component: App,
};

const Template = (args) => (
  <div style={{ border: '2px solid pink' }}>
    <App {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <div style={{ textAlign: 'center' }}>
      <h1>App</h1>
      <p>Taringa!</p>
    </div>
  ),
};
