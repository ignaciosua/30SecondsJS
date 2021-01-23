//How to create javascript arrays
//Remember we are using Code Runner Extension in VScode you can Execute 

//Declare your variables!
const emptyArray  = [];
const myNumericArray = [1,2,3,4,5];
const myObjectsArray = [
    {"key":"value"},
    {"name":"alfred"}
];

const myFunctionsArray = [
    function(){return "value"},
    function(){return "Value2"}
];

const myStringArray = ["1","2","3"];

const mixedArray =  [   
    "1",
    2,
    {"key":"value"},
    ()=>console.log("Value1")
];


//Print all values!
console.log("All values");
console.log("emptyArray", emptyArray);
console.log("myNumericArray", myNumericArray);
console.log("myObjectsArray", myObjectsArray);
console.log("myFunctionsArray", myFunctionsArray);
console.log("myStringArray", myStringArray);
console.log("mixedArray", mixedArray);

//let's print some specific values of the array
console.log("Access specific values");

//Print length of empty array
console.log("emptyArray", emptyArray.length);
console.log("myNumericArray", myNumericArray[0]);
console.log("myObjectsArray", myObjectsArray[1].name);
console.log("myFunctionsArray", myFunctionsArray[1]());
console.log("myStringArray", myStringArray[2]);
console.log("mixedArray", mixedArray[2].key);

//Execute code Remember CTRL-ALT-N

//Thanks for watching! and remember to Subscribe for more How to's in 30 seconds!