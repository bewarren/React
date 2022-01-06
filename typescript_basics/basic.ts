// Primitives: numbers, string, booleans
// Arrays and objects
// Function types, parameters

// Primitives

let age: number = 1;
let userName: string = "Ben";
let isInstructor: boolean = true;

// Arrays & Objects

let hobbies: string[] = [
  "running",
  "cycling",
  "gyming",
  "physics",
  "reading",
  "hiking",
];

type Person = { name: string; age: number };

let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[] = [
  {
    name: "Ben",
    age: 25,
  },
  {
    name: "Max",
    age: 32,
  },
];

// Type inference

let course: string | number = "React complete guide";

course = 12341;

// Functions and types

function add(a: number, b: number): number {
  // also need type for return type
  return a + b;
}

function print(value: any): void {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

print(updatedArray);
