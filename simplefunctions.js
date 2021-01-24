//How to create functions in javascript void and return
//Remember we are using Code Runner Extension in VScode to Execute JS

//Named function
function myFunction () {
    console.log("Hello World!");
}
// To execute the function yo have to use the name of function plus ()
myFunction();

// You can pass variables to a function 
// The values passed to a function are called parameters
function functionWithParameters (oneParameter) {
    console.log(oneParameter);
}
const userName = "jhon";
const numberOne = 1;

functionWithParameters("oneParameter");
functionWithParameters(numberOne);
functionWithParameters(userName);

function functionThatReturnsAValue () {
    return "Any Value";
}
//let's assign the value returned to a new variable and print it!
let returnedValue = functionThatReturnsAValue();
console.log(returnedValue);

//Execute code Remember CTRL-ALT-N

//Thanks for watching! 
//Remember to Subscribe for more Javascript in 30 seconds!
