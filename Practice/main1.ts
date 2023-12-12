

//Arrays

function testArray() 
{
const arr1: (number|string) [] = [1,2,3,4,5,6];
arr1.shift()
arr1.unshift(1)

//arr1.splice(2,3,10)
console.log(arr1);
console.log(arr1[4])
}



//Dictionarry

function testDict() {
    let dict1:{[key:string]:number} = {Ali:10, Zain:20 };
    let dict2 = {Ali:"Friend", Zain:"Broher",
                 Huzaifa:{Owais:"Hostel Owner",Rent:[15000,17000]}
                }
    console.log(dict1["Ali"]);
    console.log(dict2.Huzaifa);
    console.log(dict2.Huzaifa.Rent[1]);
    
}

// testDict();
// testArray();


//Types

type integer = number;
type dictionaryStructure = {[key:string]:number}
type everyDictionary = {name:string, age:number}


function typeTest() {
    let a:integer = 5;
    let b:dictionaryStructure = {day:1, age:10, rollNo:123}
    let c:everyDictionary = {name:"Ali",age:13}
}



//Interfaces

interface tstingInter {
    name:string;
    age:number
    }

    function interfacetesting() {
        let p1:tstingInter = {name:"Ali", age:23 }
        console.log(p1)
    }
   // interfacetesting()


   //Classes

   class testClass {
    name:string;
    age:number;

    constructor (n:string,a:number) {
        this.name = n;
        this.age = a;
    }

    speak () {
        console.log(this.name +`is speaking`)
    }
    eat () {
        console.log(this.name+ `is eating`);
    }

    info () {
        console.log(this.name + ` having age ` + this.age + ` is a good boy`)
    }

   }

   function checkClass () {
    let person1:tstingInter = {name:"Ali",age:25};
    let person2:dictionaryStructure = {day:1 , age:23};
    let person3:everyDictionary = {name:"Ali", age:32}
    
    console.log(person1.name)
    console.log(person2.age)
    console.log(person3.name)
    let p10:testClass = new testClass ("Fahad ",20)

    p10.speak()
    p10.eat()
    p10.info()
   }
   checkClass()

