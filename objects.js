//How to create Javascript Objects
//I am using Code Runner Extension in VScode to execute code!
//Shortcut to Execute  CTRL-ALT-N

//Declare your variables!

const emptyObject = {};
const keyValueObject = {
    "name": "michael",
    "numeric": 1,
    "child": {
        "name":"alan"
    },
    myFunction() {
        return "hello!";
    },
};

// Let's print those objects!
console.log("emptyObject", emptyObject);
console.log("keyValueObject", keyValueObject);

//Now Access Values!
console.log("keyValueObject: name", keyValueObject.name);
console.log("keyValueObject: numeric", keyValueObject.numeric);
console.log("keyValueObject: child name", keyValueObject.child.name);
console.log("keyValueObject: myFunction", keyValueObject.myFunction());

// Assign Value
emptyObject.newValue = "lala";

console.log("emptyObject", emptyObject)


//Thanks for watching! 
//Remember to Subscribe for more Javascript in 30 seconds!