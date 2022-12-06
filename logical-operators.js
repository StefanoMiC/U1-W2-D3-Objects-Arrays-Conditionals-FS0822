let height = 201;
let eyeColor = "brown";
let hairColor = "brown";

let isTallerThan200 = height >= 200;

let hasDarkEyesAndLightHair =
  (eyeColor === "brown" || eyeColor === "darkGray" || eyeColor === "darkGreen") &&
  (hairColor === "lightBrown" || hairColor === "yellow" || hairColor === "white");
// (true            ||           false          ||        false )    => true  &&    (false                   ||           false                      false) => false

// true && false => false

console.log(hasDarkEyesAndLightHair);

let oneConditionTrue = isTallerThan200 || hasDarkEyesAndLightHair;

console.log(oneConditionTrue);
