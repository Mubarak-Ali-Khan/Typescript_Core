type Person4 = { name: string; age: number };

interface Person5 {
  name: string;
  age: number;
}

// LIKE A MAP OF A HOUSE
class Person6 {
  //variables, properties, instance variables
  // accessible within the class with `this.`
  // accessible outside the class with object
  name: string;
  age: number;

  //constructor
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  // methods/functions
  speak() {
    console.log(this.name, " is speaking");
  }

  eat() {
    console.log(this.name, " is eating");
  }
}

// types and interfaces are same:

function main6() {
  let p1: Person4 = { name: "ali", age: 3 };
  let p2: Person5 = { name: "ali", age: 3 };
  let p3: Person6 = new Person6("Khan", 66);

  //let p3: Person6 = { name: "ali", age: 3 };
  let p4: Person6 = new Person6("Maryam", 4); //INSTANTATION, CREATING AN OBJECT
  console.log(p4.name);
  p4.speak();
  p3.eat();

  console.log(p1);
}

main();
