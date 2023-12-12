type Integer = number;
type PersonAge1 = { [key: string]: number };
type Person = { name: string; age: number };

function main4() {
  let a: Integer = 3;
  let b: PersonAge1 = { ali: 5, khan: 55 };
  let p1: Person = { name: "ali", age: 3 };

  console.log(p1);
}

main();
