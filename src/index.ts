//TypeScript is a syntactic superset of JavaScript which adds static typing.
// This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types
// let x: number = 1;
// console.log(x);

// Types of data type in typescipt
// there are 2 types of data type in ts:
// primitive and non-primitive

// Primitive data types:-
// number,string,boolean,null,undifined,any

// Q1. A simple code to take a username from the user and printing it

/*let name: string = "Arjun";

function greet(name: string) {
  console.log(`Hello ${name}`);
}
greet(name);
*/

// Q2. write a fucntion that sums the 2 numbers

/*function add(a: number, b: number) {
  let total: number = a + b;
  return total;
}
console.log(add(10, 20));
*/

// Q.3 return false of the age is < 18
/*
function checkAge(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
console.log(checkAge(20));
 */

// Q4. sending a fucntion as an argument to another function

/*
function getDelayed(fn: (name: string) => void) {
  setTimeout(fn, 1000);
}
function nameCall(name: string) {
  console.log(`Hello ${name}`);
}
getDelayed(() => nameCall("Arjun"));
 */

// like objects in js we have interfaces for typescipt
// objects in js
/*
const user={
  firstName:Arjun,
  lastName:Gupta,
  email:arjung7751@gmail.com,
  age:20
}
  */

// interface in ts
interface user {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}
const greet = (user: user) => {
  console.log(`Hello ${user.firstName} ${user.lastName}`);
  console.log(`Youre email is-> ${user.email} and age is-> ${user.age}`);
};
const myUser: user = {
  firstName: "Arjun",
  lastName: "Gupta",
  email: "arjung7751@gmail.com",
  age: 20,
};
greet(myUser);
