//Difference between const let and var
//Remember we are using Code Runner Extension in VScode to Execute JS

//Variables

//Const will create a constant value
//Will never change!
const CONSTANT_ONE = 1;
// This will cause error
// CONSTANT_ONE = 500 

//Constant objects and arrays
//You can change the values inside but not the type!
const MY_ARRAY = [1,2,3]
const MY_OBJECT = {"name":"Key"}
//This is a global variable available everywhere
var globalVariable = 1;
(function(){

//This variable will be availabe inside this function
//And also in every child function
let myVariable = 5;
    (function () {
        console.log(myVariable);
        console.log(globalVariable);
    })()
})()
//But will not be available here
//This will cause an error!
//console.log(myVariable)
//This will work because it's global
console.log(globalVariable);

console.log(MY_ARRAY)
console.log(MY_OBJECT)
console.log(CONSTANT_ONE)

//Execute code Remember CTRL-ALT-N

//Thanks for watching! 
//Remember to Subscribe for more Javascript in 30 seconds!
