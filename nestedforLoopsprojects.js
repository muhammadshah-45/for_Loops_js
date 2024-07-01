//Let's Start with Nested forLoops in JavaScript
// var count = 0;
// //Outer Loops
// for(let outer = 0; outer < 3; outer++){
//     //Inner Loops
//     for(let inner = 0; inner < 3; inner++){
//         console.log(`i: ${outer}, j: ${inner}`);
//         count++;
//     }
// }

// console.log({count});

// //No .1  Multiplication Table (5x 5)

// for(let table = 1; table <= 5; table++){

//     for(let j = 1; j <= 5; j++){
//         console.log(`${table} * ${j} = ${table * j}`);
//     }

// }

//No . 2 Multiplication Table (single number)

// let userInput = +prompt("Please enter a Number");

// for(let i = 1;i <= 5;i++){
//  console.log(`${userInput} * ${i} = ${userInput * i}`);
// }

//No . 3 Multiple any table 

// let number = parseInt(prompt("Enter a number"));


// //Creating multiplication any table
// for(let i = 1; i <=10; i++){

//     //multiply i with number
//     const result = i * number;

//     //display the result
//     console.log(`${number} * ${i} = ${ number * i}`);
// }

// No. 4  Repeating Alphabet characters
// let characters = "ABC";

// let characters = ["A","B","C"];

// for(let i = 0; i < 3; i++){
    
//   for(let j = 0; j < characters.length; j++){
//     console.log([i],characters[j]);
//   }
// }


//No. 5 Triangle Projects using Nested for Loops



// for(let i = 1; i <= 8; i++){
//     //rows -> for lines
//     let stars = "";
//     for(let j = 1; j <= i; j++){
//         // console.log([i],stars);
//         stars += "*";

//     }
//     console.log(stars);
// }

// for (let i = 4; i >= 1; i--) {
//     let output = "";
//     for (let j = 1; j <= i; j++) {
//       output += "x";
//     }
//     console.log(output);
//   }



// for (let i = 1; i <= 5; i++) {
//     let output = "";
//     for (let j = 1; j <= i; j++) {
//       output += "* ";
//     }
//     console.log(output);
//   }
  
//   for (let i = 4; i >= 1; i--) {
//     let output = "";
//     for (let j = 1; j <= i; j++) {
//       output += "* ";
//     }
//     console.log(output);
//   }
  

//  //No .6  Project: Pyramid Shape

// // Here's an example code:

// for (let i = 1; i <= 5; i++) {
//   let output = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     output += " "; // Add spaces for indentation
//   }
//   for (let k = 1; k <= i; k++) {
//     output += "x "; // Add asterisks
//   }
//   console.log(output);
// }