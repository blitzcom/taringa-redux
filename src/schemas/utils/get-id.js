function getId(root) {
  return root.type === 'channel' || root.type === 'channel:summary'
    ? root.name
    : root.id;
}

export default getId;
