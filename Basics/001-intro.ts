function main1() {
  console.log("Hello world");
}

function testArray1() {
  let a = [3, 4, 5];
  console.log(a[2]);
  //add element at end.
  a.push(8);

  a.splice(1, 2, 10); //adding and deleting array from middle

  a.shift();
  a.unshift(100);
  console.log(a);
  console.log(a[1]);
}

function testDict1() {
  let a = { taha: 32, ali: 44 };
  let b = {
    abc: 5,
    taha: { age: 5, degree: "Mbbs" },
    ali: { lastname: "xx", age: [55, 66] },
  };

  console.log(b["ali"]);
  console.log(b.ali);
  console.log(b.ali.age);
}

main1();
testArray1();
testDict1();
