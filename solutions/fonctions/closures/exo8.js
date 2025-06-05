function Person(name, age) {
  return {
    getName() {
      return name;
    },
    getAge() {
      return age;
    },
    setAge(newAge) {
      age = newAge;
    },
  };
}
