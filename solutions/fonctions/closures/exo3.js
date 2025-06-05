function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getValue() {
      return count;
    },
  };
}
