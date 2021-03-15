function getId(root) {
  if (root.type === 'channel' || root.type === 'channel:summary') {
    return root.name;
  }

  if (root.type === 'user' || root.type === 'user:summary') {
    return root.username;
  }

  return root.id;
}

export default getId;
