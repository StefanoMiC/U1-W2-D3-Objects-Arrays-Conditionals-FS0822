// let name = "Stefano";
// let lastName = "Miceli";

// let name2 = "Davide";
// let lastName2 = "Sberna";
// console.log("nome:", name, "cognome:", lastName2);

console.log("\n ------------------------------ CREATING AN OBJECT -------------------------------------");

// key-value pairs (coppie chiave-valore)
const student = {
  firstName: "Alessandro", //string
  lastName: "D'Ascenzo", //string
  age: 24, //number
  hasWebcam: true //boolean
};

const student2 = {
  firstName: "Alberto", //string
  "last-Name": "Macis", //string
  age: 22, //number
  hasWebcam: true //boolean
};

const student3 = {
  firstName: "Michela", //string
  lastName: "Kalowski", //string
  age: 25, //number
  hasWebcam: true //boolean
};

console.log("\n ------------------------------ ACCESSING AN OBJECT PROPERTY -------------------------------------");

// let fullName = student
console.log(student); // [object Object]
console.log(student.firstName, student.lastName, "ha la webcam? ", student.hasWebcam);
console.log(student2.firstName, student2.lastName, "ha la webcam? ", student2.hasWebcam);
console.log(student3.firstName, student3.lastName, "ha la webcam? ", student3.hasWebcam);

console.log("\n ------------------------------ CHANGING OBJECT PROPERTIES -------------------------------------");

student3.hasWebcam = false;
console.log(student3.firstName, student3.lastName, "ha la webcam? ", student3.hasWebcam);

student2.hasWebcam = !student2.hasWebcam;
student.age = student.age + 1;
console.log(student.firstName, student.lastName, "età? ", student.age);
student.age += 1; //student.age = student.age + 1;
student.age += 10;
student.age++;
student.age--;

console.log(student.firstName, student.lastName, "età? ", student.age);

console.log("\n ------------------------------ ADDING OBJECT PROPERTIES -------------------------------------");

student.location = "Lazio";

console.log(student.location);
console.log(student);

student.propertyToRemove = null;
student2.propertyToRemove = null;
student3.propertyToRemove = null;

console.log(student);
console.log(student2);
console.log(student3);

console.log("\n ------------------------------ REMOVING OBJECT PROPERTIES -------------------------------------");
delete student.propertyToRemove;
console.log(student);

console.log("STUDENT3 PRIMA", student3);

// const student4 = {
//     firstName:"Eleonora",
//     lastName:"Mattera",
//     hasWebcam: student3.hasWebcam,
// }

// const student4 = student3; // SBAGLIATO!
const student4 = {};
Object.assign(student4, student3);
// console.log(student4);
const addition = { planet: "Mars", lightYears: 1298391823 };

const _student4 = Object.assign(
  {},
  student3,
  { firstName: "Eleonora", lastName: "Mattera", propertyToRemove: "not-removed" },
  addition
);

// console.log("STUDENT4 PRIMA", student4);
// student4.firstName = "Eleonora";
// student4.lastName = "Mattera";
delete _student4.propertyToRemove;
console.log("___STUDENT4", _student4);
// console.log("STUDENT4 DOPO", student4);

console.log("STUDENT3 DOPO", student3);

console.log(
  "\n ------------------------------ ALTERNATIVE WAY TO ACCESS OBJECT PROPERTIES -------------------------------------"
);

let x = "hasWebcam";
console.log(student2[x]);

// let x = "has";
student2["last-Name"];
// console.log(student2[x + "Web" + "cam"]); //student2["hasWebcam"]

console.log("\n ------------------------------ USING AN OBJECT AS A DICTIONARY -------------------------------------");

const fruitDictionary = {
  apple: "loved by Snow White, scares doctors away",
  banana: "long yellow fruit, loved by monkeys",
  coconut: "hard round fruit spotted on tropical islands"
};

let fruitThatTheUserWantsToKnowAbout = "apple";
let definition = fruitDictionary[fruitThatTheUserWantsToKnowAbout];

if (definition !== undefined) {
  console.log("Definition for " + fruitThatTheUserWantsToKnowAbout.toLocaleUpperCase() + ": " + definition);
} else {
  console.log(
    "Definition for " +
      fruitThatTheUserWantsToKnowAbout.toLocaleUpperCase() +
      ": was not found, please try another fruit"
  );
}
