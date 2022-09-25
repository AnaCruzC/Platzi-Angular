const username: string | number = 'anita';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1, 6);

class Person{
   age: number;
  lastName: String;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const nico = new Person(15, 'molina');
nico.age;
