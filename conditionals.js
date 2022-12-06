console.log("\n ------------------------------ IF STATEMENTS -------------------------------------");

const boy = {
  name: "Eric",
  age: 15
};

// if(condition) {
//      block of code to execute if condition is true
// } else {
//      block of code to execute if condition is false
// }

if (boy.age >= 16) {
  console.log("PUOI ENTRARE");
} else if (boy.age < 16 && boy.age > 10) {
  if (boy.name !== undefined) {
    console.log("HEY " + boy.name.toUpperCase() + ", TORNA TRA UN PO'");
  }
} else {
  console.log("GO TO YOUR MOTHER");
}
