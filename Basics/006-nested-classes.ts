//nest classes, composition

class Person7 {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  speak() {
    console.log(this.name, " is speaking");
  }
}

class Home {
  owner: Person7;
  address: string;

  constructor(o: Person7, ad: string) {
    this.owner = o;
    this.address = ad;
  }
}

// types and interfaces are same:

function main() {
  let khan: Person7 = new Person7("Khan", 66);
  let h1: Home = new Home(khan, "H33, st42, H-8/4");
  console.log(h1);
}

main();
