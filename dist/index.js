"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
// Basic TypeScript example
function greet(name) {
    return `Hello, ${name}! Welcome to TypeScript!`;
}
console.log(greet("Developer Sajid"));
console.log("Do you want to learn TypeScript?");
console.log("first");
let a = 10;
console.log(a);
let b = "Sajid ";
console.log(b);
let c = true;
let d = null;
d = "Elephant";
console.log(d);
let e = undefined;
console.log(e);
e = 10.69999;
console.log(e);
let f = true;
let g = 10;
g = "Sajid";
console.log(g);
let h = 10;
h = "Sajid";
console.log(h);
let arr1 = ["sajid", "1"];
console.log(arr1);
let arr2 = [[123], [123]];
console.log(arr2);
let arr3 = [[123], ["jkl"]];
console.log(arr3);
let arr4 = [[123], ["jkl"]];
console.log(arr4);
let arr5 = [[123], ["jkl"]];
console.log(arr5);
let arr6 = [["empty"], [true, false, 481902]];
let arr7 = [
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
let arr8 = [
    "sajid",
    [123, true],
];
// LITERALS
let literal1;
literal1 = 50;
console.log(literal1);
let literal2;
literal2 = "south";
console.log(literal2);
literal2 = "North";
console.log(literal2);
// ENUM
var weightCLass;
(function (weightCLass) {
    weightCLass[weightCLass["lightweight"] = 180] = "lightweight";
    weightCLass[weightCLass["middleweight"] = 200] = "middleweight";
    weightCLass[weightCLass["heavyweight"] = 250] = "heavyweight";
})(weightCLass || (weightCLass = {}));
let IslamMachchev = weightCLass.lightweight;
console.log(IslamMachchev);
var Directions;
(function (Directions) {
    Directions["North"] = "NORTH";
    Directions["South"] = "SOUTH";
    Directions["West"] = "WEST";
    Directions["East"] = "EAST";
})(Directions || (Directions = {}));
let myLocation = Directions.North;
console.log(myLocation);
// any, Unkown, typecast
let x = "sajid";
x = 10;
x = true;
x = false;
x = 20;
let y = 10.09908786;
if (typeof y == "number") {
    console.log(y + 10);
}
else if (typeof y == "string") {
    console.log(y + "another string");
}
// when we know the type of y explicitly then we can cast it to its type but its very dangeruos i,e
const z = y + 10;
console.log(z);
// But Now we can cast y into anything and if it doesnot matches its real type it will give us an error i.e
// const k = (y as string[][])[0][1]; ------> These are runtime JS errors
// console.log(k);
// OPTIONAL CHAINING & BANG
let arr_1 = [{ name: "Sajid" }];
let name1 = (_a = arr_1.pop()) === null || _a === void 0 ? void 0 : _a.name;
console.log(name1);
let arr_2 = [[{ age: 23 }]];
let age1 = (_c = (_b = arr_2.pop()) === null || _b === void 0 ? void 0 : _b.pop()) === null || _c === void 0 ? void 0 : _c.age;
console.log(age1);
let arr_3 = [{ name: "Sajid" }];
let name2 = arr_3.pop();
let arr_4 = [[{ age: 23 }]];
let age2 = arr_4.pop().pop().age;
console.log(age2);
// FUNCTIONS
let func_divide = (param1, param2) => {
    return param1 / param2;
};
const result1 = func_divide(12, 34);
console.log(result1);
let func_concate = (firstName, lastname, middlename) => {
    if (middlename) {
        return firstName + middlename + lastname;
    }
    return firstName + lastname;
};
const result2 = func_concate("Sajid", "Saleem", "Khattak");
console.log(result2);
const result3 = func_concate("Sajid", "Saleem");
console.log(result3);
let func_multiply = (param1, param2) => {
    return param1 * param2;
};
let func_complex_calc = (funcs, values) => {
    return funcs.map((fn, i) => fn(...values[i]));
};
let result4 = func_complex_calc([func_divide, func_multiply], [
    [24, 35],
    [78, 56],
]);
console.log(result4);
let bmw = {
    brand: "bmw",
    model: 2023,
    accidental: false,
    mileage: (td, fd) => {
        return td - fd;
    },
};
console.log(bmw);
let secondMileage = bmw.mileage(23, 45);
console.log(secondMileage);
let person1 = {
    name: "Sajid",
    age: 24,
};
let manager = {
    name: "HI MANAAGER",
    age: 22,
    managers: ["HI", "Bye"],
    brand: "kjk",
    model: 213,
    mileage: (td, fd) => td - fd,
};
