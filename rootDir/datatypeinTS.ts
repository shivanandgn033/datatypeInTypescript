const fname :string="Angular type script";
console.log(fname);
const value: number=33;
console.log(value);
let myname="shivanand Nagarabetta";
console.log(myname);
console.log("auto save checking");
console.log("auto save checking.. continee!");

//litral with primitive data type anoptaion
let username: string = "Alice";
console.log(username);
let age: number = 30;
console.log(age);
let isStudent: boolean = true;
console.log(isStudent);
// Array
let hobbies: string[] = ["reading", "coding", "gaming"];
console.log(hobbies);// Tuple
let address: [string, number] = ["Main Street", 123];
console.log(hobbies);
// Enum
enum Color {
    Red,
    Green,
    Blue
}

let favoriteColor: Color = Color.Green;
console.log(favoriteColor);

interface employee{
    fname:string;
    id:number;
    age?:number;
    exemp:boolean;
}

let empdetails:employee={
    fname:"sandeep",
    id:113,
    age:38,
    exemp:true
}

console.log(empdetails);

class Car {
    constructor(public brand:string,public model:string){}
     start(){
        console.log("car started");
    }
}
let rCar= new Car("renault" , "kwid");
console.log(rCar);
let mCar= new Car("Mahendra" , "Thar");
console.log(mCar);

// function with name and without name

function greet(name:string):string{
    return "study typescript with me"+name;
}

let greets=greet("sandeep");

// abstract class
abstract class Shape {
    constructor(public color: string) {}
  
    abstract getArea(): number; // Abstract method
  
    // Concrete method
    printColor(): void {
      console.log(`Color: ${this.color}`);
    }
  }
  
  class Circle extends Shape {
    constructor(color: string, public radius: number) {
      super(color);
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(color: string, public width: number, public height: number) {
      super(color);
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  const circle = new Circle("red", 5);
  console.log(circle.getArea()); // Output: 78.53981633974483
  circle.printColor(); // Output: Color: red
  
  const rectangle = new Rectangle("blue", 4, 6);
  console.log(rectangle.getArea()); // Output: 24
  rectangle.printColor(); // Output: Color: blue

  type emp=[string, number];
  let empDtl:emp=["sandeep",123];

//function

function greetwell(name: string): string {
    return "Hello, " + name + "!";
  }
  const message = greetwell("John"); 
console.log(message); // Output: "Hello, John!"

// Function Parameters
//Required Parameters: Parameters that must be provided when calling the function.
//Optional Parameters: Parameters that can be omitted when calling the function. They are denoted by a ? after the parameter name.
function add(a: number, b: number = 0): number {
    return a + b;
  }
  
  const sum1 = add(5, 3); // sum1 is 8
  const sum2 = add(5);     // sum2 is 5

  //Return Type
  function logMessage(message: string): void {
    console.log(message);
  }

  //function add(a:number,b:number):number;
  //function add(a:string,b:string):string;
  //function add(a:any,b:any):any
  //{
  //   return a+b;
 // }

 //Intersection Types
 interface User {
    name: string;
  }
  
  interface Role {
    role: string;
  }
  
  type UserWithRole = User & Role;
  
  const admin: UserWithRole = {
    name: "John Doe",
    role: "admin"
  };

  //Union Types
   type StringOrNumber = string | number;

   let id: StringOrNumber = "123";
   id = 456; 

   // Literal Types

   type Direction = "Up" | "Down" | "Left" | "Right";

   let direction: Direction = "Up";

   //Indexed Access Types
   type User1 = { name: string, age: number };

   type UserName = User1["name"]; // string
   let usernamef:string="undefined"

   console.log(typeof(usernamef));
   



