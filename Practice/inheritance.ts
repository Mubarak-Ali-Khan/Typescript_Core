
// Inheritance

class p14{
    name:string;
    age: number

    work() {
            console.log('The person ' + this.name + ' having age ' + this.age +' is working ' ) 
    }

    constructor(n:string,a:number) {
        this.name = n
        this.age = a
        //this.work();
    }
}

class p15 extends p14 {
    address:string
    points:number

    responsibility () {
        console.log(this.name + ' having address ' + this.address + ' is responsibile for p15 ' + ' and points are ' + this.points)
    }

    constructor(n:string,a:number,ad:string,points:number) {
        super(n,a)

        this.address = ad
        this.points = points
       // this.responsibility()
    
    }
}

function testInheritance() {
    let p16:p14 = new p14 ("Ali",22)
    let p17:p15 = new p15 ("Mubarak",23,"H-13, Islamabad",100)

    console.log(p16);
    console.log(p17);
    

    // console.log(p17.points)
    // p17.responsibility()
    // p17.work()
    // p16.work()

}
testInheritance();
