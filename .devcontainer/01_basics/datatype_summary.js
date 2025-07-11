
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// stack and heap memory

// creates copy
let myname="kalpak";
let yourname=myname;
yourname="pranay";

console.log(myname);
console.log(yourname);

// gives refference
let userOne={
    email:"kalpak@gmail.com",
    upi:"gpay"
}
let userTwo=userOne;

userTwo.email="pranay@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
