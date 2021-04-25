import invariant from 'invariant';

const PLURALIZATIONS = {
  communities: ['Comunidades', 'Comunidad'],
  followers: ['Seguidores', 'Seguidor'],
  following: ['Siguiendo', 'Siguiendo'],
  posts: ['Posts', 'Post'],
  subscriptions: ['Suscriptores', 'Suscriptor'],
};

function pluralize(label, value = 0) {
  invariant(
    label in PLURALIZATIONS,
    `Label [${label}] is missing in pluralizations.`,
  );

  const [plural, singular] = PLURALIZATIONS[label];

  return value === 1 ? singular : plural;
}

function usePluralization() {
  return pluralize;
}

export default usePluralization;
