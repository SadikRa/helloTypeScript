function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet("World");
// console.log(message);

let isActive = true;
// console.log(isActive);

// number
let decimal: number = 6;
let hex: number = 0xf00d; // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal
let float: number = 3.14; // Floating point

//string
let name = "sadik";

const user = {
  name: "sadik",
  age: 23,
};

let namea: string = "sadik";

///15/ 4/ 26/

let greeting: string = "hello, sadik";

let useCount: number = 300;

function cllass(name: string): string {
  return `hello ${name}`;
}

// console.log(cllass("sadik"));

interface useri {
  name: string;
  roll: number
}

const users: useri = {
 name: "sadk",
 roll: 70
}

// console.log(users);

const names: string[] = []

names.push('sadik');

const car = {
  type: 'bmw'
}
car.type = 'ford'

enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum

///https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
