//nest classes, composition

class Person8 {
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

class Student extends Person8 {
  studentId: string;
  school: string;

  constructor(n:string,a:number,id: string, school: string) {
    super(n,a);
    this.studentId = id;
    this.school = school;
  }
}

function main2() {
  let khan: Person8 = new Person8("Khan", 66);
  let ali: Student = new Student("Ali", 24, "ID-442", "BeaconHouse");
  console.log(ali.studentId)
  khan.speak();
  ali.speak();
}

main();
