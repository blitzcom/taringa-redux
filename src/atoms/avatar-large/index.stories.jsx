import AvatarLarge from '.';

export default {
  title: 'atoms/AvatarLarge',
  component: AvatarLarge,
};

const Template = (args) => <AvatarLarge {...args} />;

export const Default = Template.bind({});

Default.args = {
  src:
    'https://media.taringa.net/knn/crop:90x90/aHR0cHM6Ly9hMTEudDI2Lm5ldC90YXJpbmdhL2F2YXRhcmVzLzMvNy85L0IvOS9FL2hlcm44NC8xMjB4MTIwX0I4MC5qcGc',
};
