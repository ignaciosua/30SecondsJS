//Composition by example in javascript
//Remember we are using Code Runner Extension in VScode to Execute JS

//Composition is when you send the value from one function to another

//Simple composition function 

function addValuesPlustwo(value1){
    console.log("do something with value1 before second function call")
    value1++
    return function(value2){
        console.log("do something with value2 before return")
        value2++
        return console.log(value1 + value2);
    }
}

//Let's execute our add function.
addValuesPlustwo(1)(1)
//result must be 4 because we are adding +1 inside the functions

// This executes the first function addValuesPlustwo(1)
// If you dont add the second ()() will return the child function
// and when you add double()() executes the function at return function(value2){


//Execute code Remember CTRL-ALT-N

//Thanks for watching! 
//Remember to Subscribe for more Javascript in 30 seconds!
