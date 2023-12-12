type Person1 = { name: string , age: number };

interface Person2 {
  name: string;
  age: number;
}

// types and interfaces are same:

function main5() {
  let p1: Person1 = { name: "ali", age: 3 };
  let p2: Person2 = { name: "ali", age: 3 };

  console.log(p1);
}

main();
