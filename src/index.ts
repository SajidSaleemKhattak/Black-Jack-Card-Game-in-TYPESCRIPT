// Basic TypeScript example
function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript!`;
}

console.log(greet("Developer Sajid"));
console.log("Do you want to learn TypeScript?");

console.log("first");

let a: number = 10;
console.log(a);
let b: string | number = "Sajid ";
console.log(b);
let c = true;
let d = null;
d = "Elephant";
console.log(d);
let e = undefined;
console.log(e);
e = 10.69999;
console.log(e);
let f: boolean = true;
let g: any = 10;
g = "Sajid";
console.log(g);

let h: unknown = 10;
h = "Sajid";
console.log(h);

let arr1: string[] = ["sajid", "1"];
console.log(arr1);
let arr2: number[][] = [[123], [123]];
console.log(arr2);
let arr3: (string | number)[][] = [[123], ["jkl"]];
console.log(arr3);
let arr4: (number | string)[][] = [[123], ["jkl"]];
console.log(arr4);
let arr5: (string | number)[][] = [[123], ["jkl"]];
console.log(arr5);
let arr6 = [["empty"], [true, false, 481902]];
let arr7: ((boolean | string) | number)[][] = [
  [false],
  [true, false, 481902],
  ["empty"],
];
console.log(arr6);
console.log(arr7);
arr6[0][0] = "not empty";
console.log(arr6);
arr6[0].length = 100;
console.log(arr6);
console.log(arr6[0].length);
arr7[7] = ["new value"];
console.log(arr7);
let arr8: ((string | number | boolean)[] | string | number | boolean)[] = [
  "sajid",
  [123, true],
];

// LITERALS

let literal1: 20 | 30 | 40 | 50;
literal1 = 50;
console.log(literal1);

let literal2: "North" | "south";
literal2 = "south";
console.log(literal2);

literal2 = "North";
console.log(literal2);

// ENUM
enum weightCLass {
  lightweight = 180,
  middleweight = 200,
  heavyweight = 250,
}

let IslamMachchev: weightCLass = weightCLass.lightweight;
console.log(IslamMachchev);

enum Directions { // Note: PascalCase is conventional for enums
  North = "NORTH",
  South = "SOUTH",
  West = "WEST",
  East = "EAST",
}

let myLocation: Directions = Directions.North;
console.log(myLocation);

// any, Unkown, typecast

let x: any = "sajid";
x = 10;
x = true;
x = false;
x = 20;

let y: unknown = 10.09908786;

if (typeof y == "number") {
  console.log(y + 10);
} else if (typeof y == "string") {
  console.log(y + "another string");
}

// when we know the type of y explicitly then we can cast it to its type but its very dangeruos i,e

const z = (y as number) + 10;
console.log(z);

// But Now we can cast y into anything and if it doesnot matches its real type it will give us an error i.e
// const k = (y as string[][])[0][1]; ------> These are runtime JS errors
// console.log(k);

// OPTIONAL CHAINING & BANG

let arr_1 = [{ name: "Sajid" }];
let name1 = arr_1.pop()?.name;
console.log(name1);

let arr_2 = [[{ age: 23 }]];
let age1 = arr_2.pop()?.pop()?.age;
console.log(age1);

let arr_3 = [{ name: "Sajid" }];
let name2 = arr_3.pop()!;

let arr_4 = [[{ age: 23 }]];
let age2 = arr_4.pop()!.pop()!.age;
console.log(age2);

// FUNCTIONS

let func_divide = (param1: number, param2: number): number => {
  return param1 / param2;
};

const result1 = func_divide(12, 34);
console.log(result1);

let func_concate = (
  firstName: string,
  lastname: string,
  middlename?: string
): string => {
  if (middlename) {
    return firstName + middlename + lastname;
  }
  return firstName + lastname;
};
let anyvar: number | string = 22;
console.log(anyvar);
anyvar = "Sajid";
console.log(anyvar);

const result2 = func_concate("Sajid", "Saleem", "Khattak");
console.log(result2);

const result3 = func_concate("Sajid", "Saleem");
console.log(result3);

let func_multiply = (param1: number, param2: number): number => {
  return param1 * param2;
};

let func_complex_calc = (
  funcs: ((a: number, b: number) => number)[],
  values: [number, number][]
): number[] => {
  return funcs.map((fn, i) => fn(...values[i]));
};

let result4 = func_complex_calc(
  [func_divide, func_multiply],
  [
    [24, 35],
    [78, 56],
  ]
);

console.log(result4);

// Advaned FUNCTION Types
// 1 REST PARAMETER

// Higher Order Functions

// INTERFACES

interface Cars {
  brand: string;
  model: number;
  accidental?: boolean;
  mileage: (param1: number, param2: number) => number;
}

let bmw: Cars = {
  brand: "bmw",
  model: 2023,
  accidental: false,
  mileage: (td: number, fd: number): number => {
    return td - fd;
  },
};

console.log(bmw);

let secondMileage = bmw.mileage(23, 45);
console.log(secondMileage);

interface Employees {
  name: string;
  age: number;
}

let person1: Employees = {
  name: "Sajid",
  age: 24,
};

interface Manager extends Employees, Cars {
  managers: string[];
}

let manager: Manager = {
  name: "HI MANAAGER",
  age: 22,
  managers: ["HI", "Bye"],
  brand: "kjk",
  model: 213,
  mileage: (td, fd) => td - fd,
};

let literal4: "Hi " | "Hello" | 10;

// GENERICS
function add<Q, W>(param1: Q, param2: W, param3: Q): W {
  if (param1) {
    param3;
    return param2;
  } else return param2;
}

const result_of1 = add<string, number>("Its a String", 10, "Another String");
console.log(result_of1);

// NOW ALIASES

type tuples = [number, number];

function anything(p1: tuples, p2: tuples): tuples {
  return [p1[1], p2[0]];
}
