const temp = 25; // You can change this value to test different outputs
// Check the temperature and respond accordingly
if (temp > 30) { // Hot if temperature is above 30
   console.log("It's hot.");
} else if (temp >= 20) { // Warm if temperature is between 20 and 30
   console.log("It's warm.");
} else { // Cold if temperature is below 20
   console.log("It's cold.");
}



const day = "Monday"; // You can change this value to test different outputs
// Check the day and respond accordingly
switch (day) // Start of switch statement
{
   case "Monday": // If day is Monday
       console.log("Start of the week.");
       break;
   case "Friday": // If day is Friday
       console.log("End of the workweek.");
       break;
   default:
       console.log("It's a regular day.");
}



// ternary
let a = 10;
console.log(a === 5 ? "a is equal to 5" : "a is not equal to 5");


//for loop
for (let i = 1; i <= 3; i++) {
   console.log("Count:", i);
}

 // while loop
 let i = 0;
while (i < 3) {
   console.log("Number:", i);
   i++;
}

// do while
let i = 0;
do {
   console.log("Iteration:", i);
   i++;
} while (i < 3);


// for in loop
const obj = { name: "Ashish", age: 25 }; // Sample object
// Iterate over the object's properties using for...in loop
for (let key in obj) // loop through each key in the object
   {
   console.log(key, ":", obj[key]); // print each key-value pair
}



//for of
 let a = [1, 2, 3, 4, 5]; // Sample array
// Iterate over the array using for...of loop
for (let val of a) // loop through each value in the array
{
   console.log(val); // print each value
}


// named function
function add(a, b) {
  return a + b; 		// returns the sum
}

let result = add(5, 10);
console.log(result); 



// function expression
const sum = function (x, y) 
{  
     return x + y;
};

let z = sum(2, 3);
console.log(z)


// arrow function
const divide = (x, y) => {
let res = x / y;
return res;
};

console.log(divide(10, 5));



// callback function 
NOTE: 
Run the following code in the web browser by inserting it in a HTML file.  



function showData(name, amt) {    
  alert(' Hello ' + name + '\n Your are saving ' + amt);    
}    

function getData(callback) {    
  var name = prompt(" Welcome! \n What is your name? ");    
  var amt = prompt(" Enter the amount you wish to save.");    
  callback(name, amt);    //callback === showData
}    
    
getData(showData);		//calling back the function



// callback function nodesjs
NOTE: 
Before using the prompt function, you need to install prompt-sync by executing the “npm install prompt-sync” command in your command prompt or terminal. 




function showData(name, amt) {   
 console.log(' Hello ' + name + '\n Your are saving ' + amt);   
}   


function getData(callback) { 
 const prompt = require('prompt-sync')();
  var name = prompt(" Welcome! \n What is your name? ");   
 var amt = prompt(" Enter the amount you wish to save.");   
 callback(name, amt);    //callback === showData
}   
  
getData(showData);


// nested function
function outerFun(a) {
   console.log("The value of a is: " + a);
   function innerFun(b) {
       console.log("The value of b is: " + b);
       return a + b;
   }
   return innerFun;
}


const addTen = outerFun(10);    // addTen is now innerFun with a = 10
console.log(addTen(5)); // Outputs 15 (10 + 5)



