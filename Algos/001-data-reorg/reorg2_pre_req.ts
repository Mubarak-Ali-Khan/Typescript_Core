function main223() {
  console.log("hello");
  let x = { name: "Ahmad", lastname: "Hassan", age: 30 };
  let y = { education: "Bsc", color: "green" };

  console.log("Structure, via spread operator ");
  let z = { ...x, ...y };
  let p = {};
  console.log(z);
  for (let key in x) {
    p[key] = x[key]
  };
  for (let key in y) p[key] = y[key];
  console.log('value of p is',p);

  console.log("Destructure, via spread operator ");
  let { name, lastname, ...others } = z;
  console.log(name);
  console.log(lastname);
  console.log(others);
}

main223();
