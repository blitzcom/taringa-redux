export default function joinedAtMapper(current, value) {
  const created = current?.created ?? value.created;

  if (typeof created === 'undefined') {
    return '';
  }

  const date = new Date(created);

  // TODO: Update with i18n.
  return date.toLocaleDateString('es', { year: 'numeric', month: 'long' });
}
