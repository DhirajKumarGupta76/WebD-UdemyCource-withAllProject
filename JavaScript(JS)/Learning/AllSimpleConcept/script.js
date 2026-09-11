
// AREA OF TRINGLE

// let base = prompt("Enter base:");
// let height = prompt("Enter height:");

// console.log(`The value of base is: ${base},The value of height is: ${height}`);


// let area = (base * height) / 2;

// alert("Area of Triangle = " + area);





// SWAPPING OF TWO Number.

// let a = prompt("Enter first number:");
// let b = prompt("Enter second number:");

// console.log(`Before swap: a = ${a}, b = ${b}`);

// let temp = a;
// a = b;
// b = temp;

// console.log(`After swap: a = ${a}, b = ${b}`);





// CONVERT KILOMETER TO MILES

// let km = prompt("Enter distance in kilometers:");

// let miles = km * 0.621371;

// console.log(`${km} kilometers = ${miles} miles`);






// To convert Celsius to Fahrenheit in JavaScript, use the formula:


// let celsius = prompt("Enter temperature in Celsius:");

// let fahrenheit = (celsius * 9/5) + 32;

// console.log(`${celsius}°C = ${fahrenheit}°F`);




// Generate Random Number (0 to 1)-> 0 to 0.999999

// let num = Math.random();

// console.log(num);



// 2️⃣ Random Number Between 1 and 10

// let num = Math.floor(Math.random() * 10) + 1;

// console.log(num);


// Example with User Input

// let min = prompt("Enter minimum number:");
// let max = prompt("Enter maximum number:");

// let random = Math.floor(Math.random() * (max - min + 1)) + Number(min);

// alert("random number is" +random);

// console.log(`Random number is: ${random}`);



// JavaScript Program (4 Digit OTP)

// let random = Math.floor(start no. + Math.random() * (max no. - start no.+1)) ;



// let otp = Math.floor(1000 + Math.random() * 9000);

// alert(`Your OTP is: ${otp}`);




// GENRATE A RANDOM OPT COMBINATION OF ALBHABHET AND NUMBER
// Alphanumeric OTP formula:
// 1. Create string with all letters + digits
// 2. Loop n times (length of OTP)
// 3. Pick random character each time
// 4. Combine to OTP


// function generateOTP(length) {
//     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let otp = "";

//     for (let i = 0; i < length; i++) {
//         let index = Math.floor(Math.random() * characters.length);
//         otp += characters[index];
//     }

//     return otp;
// }

// // Generate 6-character OTP
// let otp = generateOTP(6);
// alert(`Your OTP is: ${otp}`);

// console.log(`YOUR OPT IS : ${otp}`);


/*palindrome number

How it works:

1️⃣ num.split("") → converts number (as string) to array of digits
2️⃣ .reverse() → reverses the array
3️⃣ .join("") → converts array back to string
4️⃣ Compare with original number

*/


// let num = prompt("Enter a number:");

// let reversed = num.split("").reverse().join("");

// if (num === reversed) {
//     alert(`${num} is a palindrome number`);
// } else {
//     alert(`${num} is NOT a palindrome number`);
// }





// TEA COLLECTION PROJECT;


// let teaCollection = [];
// let tea;

// while (true) {
//   tea = prompt("Enter your favourite tea (type 'stop' to finish):");

//   if (tea.toLowerCase() === "stop") {
//     break;
//   }

//   teaCollection.push(tea);
// }

// console.log("Your tea collection:", teaCollection);
