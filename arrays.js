console.log("\n ------------------------------ ARRAY -------------------------------------");

// Arrays are COLLECTIONS of elements (numbers, booleans, strings, objects, arrays, functions)

const arrayOfAnimals = ["Dog", "Cat", "Mouse", "Rabbit", "Duck", "Parrot", "Goldfish"];
console.log(arrayOfAnimals[0]);

const arrOfNumbers = [5, 10, 15, 20, 25, 30, 35];
//index:              0   1   2   3   4   5   6     7(undefined)

const arrOfBooleans = [true, false, true, false];

// const mixedArr = [true, "2", 40, undefined]; // DONT DO THIS EVERR!!!!

const orders = [{ id: 12309, product: "Wireless keyboard", quantity: 1 }];

const orders2 = [
  { id: 11239, product: "HD Webcam", quantity: 10 },
  { id: 23251, product: "24 inches display", quantity: 5 }
];

// console.log(orders[0].product);

console.log(orders[orders.length - 1]);

console.log("\n ------------------------------ COPYING (SHALLOW) AN ARRAY -------------------------------------");

const newArrOfNumbers = arrOfNumbers.slice();
newArrOfNumbers.push(100);

console.log("Original", arrOfNumbers);
console.log("Copy", newArrOfNumbers);

console.log("\n ------------------------------ CONCATENATING AN ARRAY -------------------------------------");

// const union = orders.concat(orders2);

// console.log(union);

// const orders3 = [];
console.log(
  "\n ------------------------------ ADDING AN ELEMENT (AT THE END) TO AN ARRAY -------------------------------------"
);

arrayOfAnimals.push("Bird");
// console.log(arrayOfAnimals);
// [
//   'Dog',      'Cat',
//   'Mouse',    'Rabbit',
//   'Duck',     'Parrot',
//   'Goldfish', 'Bird'
// ]

console.log(
  "\n ------------------------------ SELECTING A RANGE (NON DESTRUCTIVELY) AN ARRAY -------------------------------------"
);
const selectionOfAnimals = arrayOfAnimals.slice(3, 6);
console.log(arrayOfAnimals);
console.log(selectionOfAnimals);

console.log(
  "\n ------------------------------ REMOVING THE LAST ELEMENT OF AN ARRAY -------------------------------------"
);

const newArr = ["primo", "secondo", "terzo", "quarto", "quinto"];

const poppedArray = newArr.pop();

console.log(poppedArray);
console.log(newArr);

console.log(
  "\n ------------------------------ REMOVING THE FIRST ELEMENT OF AN ARRAY -------------------------------------"
);

newArr.shift();

console.log(newArr);

console.log(
  "\n ------------------------------ ADDING AN ELEMENT AT THE START OF AN ARRAY -------------------------------------"
);

newArr.unshift("PRIMO");
console.log(newArr);

console.log("\n ------------------------------ ORDERING ARRAY ELEMENTS -------------------------------------");

const unorderedNumbers = [100, 20, 2, 50, 1, 0, 33];

console.log(unorderedNumbers);
unorderedNumbers.sort(function (a, b) {
  return a - b;
});

console.log(unorderedNumbers);

arrayOfAnimals.sort();
console.log(arrayOfAnimals);

arrOfBooleans.sort();
console.log(arrOfBooleans);
