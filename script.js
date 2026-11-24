console.log("js testing");
var x=10;
var x=20; //redeclaration of variable x
console.log(x);

let a=30;
a="hello";// reassignment of variable a 

const b=40;
console.log(typeof a);

let c=50; 
{
    let c=60; // block scope variable 
}
console.log(c); // will print 50 because the block scope variable c is not accessible outside the block 

let d=70; 
{
    let d=80; // block scope variable 
    console.log(d); // will print 80 because the block scope variable d is accessible inside the block 
}


let num=30;
let num2=num;
num2=40
console.log(num); 

console.log(5=='5');
console.log(5==='5'); 

function add(a,b){
    return a+b;
} 
console.log(add(198,235));

//arrow function 
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 5));

let details =[
    { name: "John", age: 30 , marks: 85 },
    { name: "Jane", age: 25 , marks: 90 },
    { name: "Bob", age: 35 , marks: 75 },
    { name: "Alice", age: 28 , marks: 95 }
]
const marks=details.filter((details)=>details.marks<70)
console.log(marks); 

let arr=[1,2,3,4,5]
const red=arr.reduce((total,n)=>total+n,10)
console.log (red); 
//template literals  
let name="John"; 
let age=30; 
console.log(`My name is ${name} and I am ${age} years old.`); 