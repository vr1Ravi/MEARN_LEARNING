// hoistedFunction();

// function hoistedFunction() {
//   console.log("This is a hoisted function.");
// }

// Function expression (not hoisted)
notHoistedFunction(); // This will cause a TypeError

const notHoistedFunction = function() {
  console.log("This is a function expression, and it is not hoisted.");
};