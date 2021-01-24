//How to create callback functions in javascript
//Remember we are using Code Runner Extension in VScode to Execute JS

//Declare a callback function
function callback () {
    console.log("From callback: ","hello")
}

//Declare Callback without parameters
function executeCallback () {
    console.log("executeCallback") 
    callback();
}
executeCallback();

//Declare Callback In Return
function executeCallbackInReturn () {
    console.log("executeCallbackInReturn") 
    return callback();
}
executeCallbackInReturn();

//Declare Callback in parameters 
function executeCallbackInParams (callbackParameter) { 
    console.log("executeCallbackInParams") 
    callbackParameter();
}
executeCallbackInParams(callback);

//Execute code Remember CTRL-ALT-N

//Thanks for watching! 
//Remember to Subscribe for more Javascript in 30 seconds!
