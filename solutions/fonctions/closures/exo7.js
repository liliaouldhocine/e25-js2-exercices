function createGreeter(prefix) {
  return function (name) {
    return `${prefix} ${name}`;
  };
}
