function main3() {
  console.log("Hello world");
  let x: number = 5;
  let y: string = "abc";
}

function testArray2() {
  let a: (number | string)[] = [3, 4, 5, "abc"]; //type
  console.log(a[2]);
  //add element at end.
  a.push(8);

  a.splice(1, 2, 10); //adding and deleting array from middle

  a.shift();
  a.unshift(100);
  console.log(a);
  console.log(a[1]);
}

function testDict2() {
  let a: { [key: string]: number } = { taha: 32, ali: 44 };
  let b = {
    abc: 5,
    taha: { age: 5, degree: "Mbbs" },
    ali: { lastname: "xx", age: [55, 66] },
  };

  console.log(b["ali"]);
  console.log(b.ali);
}

main2();
testArray2();
testDict2();
