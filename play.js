
const connectKey = require("./client"); //we assign a variable to the file we require to then request the object using a key
const { setupInput } = require("./input"); //another way to require a exported "object"
//
console.log("Connecting ...");
const connection = connectKey.connect(); //this is where we take the  => file we require via value => dot => name of the object/key exported from said file
//connection();
setupInput(connection); //another way to call the function


//issues, we didnt send the connection to input