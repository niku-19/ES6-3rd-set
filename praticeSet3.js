// 1. Create a function that takes an array of
//    strings as an argument and returns a string that includes the number
//    of items in the array and the first and last items.

// const items = ["nikhil", "apple", "banana", "orange", "kumar"];

// const formatArray = (items) =>
//   `The array has ${items.length} items, and the First items is "${
//     items[0]
//   }", and the last items is "${items[items.length - 1]}"`;

// const message = formatArray(items);

// console.log(message);

// // 2. Create a function that takes a product object as an
// //    argument and returns a string that includes the product name, price,
// //    and a message based on whether it is in stock or not.

// const socksProduct = {
//   name: "Socks",
//   price: 249,
//   inStock: false,
// };
// const shoesProduct = {
//   name: "shoes",
//   price: 5000,
//   inStock: true,
// };

// const formatProduct = ({ name, price, inStock }) =>
//   !inStock
//     ? `${name} costs INR ${price} is not available now!`
//     : `${name} cost INR ${price} and is in stock!`;

// const socksProductDetailsMessage = formatProduct(socksProduct);
// const shoesProductDetailsMessage = formatProduct(shoesProduct);
// console.log(socksProductDetailsMessage);
// console.log(shoesProductDetailsMessage);

// // 3. Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

// // const findPerson = (person, name) => {
// //   let message = "";
// //   person.map((items) => {
// //     if (items.name.toLowerCase() === name.toLowerCase()) {
// //       message = `Person is Found`;
// //     } else {
// //       message = `Person is Missing`;
// //     }
// //   });
// //   return message;
// // };

// const findPerson = (person , name) => {
//   let personMatch = {};
//   for(let i = 0; i < person.length ; i++) {
//     if(person[i].name.toLowerCase() === name.toLowerCase()) {
//       personMatch = person[i];
//     }
//   }
//   return personMatch.name === name ? personMatch : null;

// }



// const findPerson = (person, name) =>
//   person.some(
//     (eachPerson) => eachPerson.name.toLowerCase() === name.toLowerCase()
//   )
//     ? `found`
//     : `not-found`;

// console.log(
//   findPerson(
//     [
//       { name: "Amay", age: 25 },
//       { name: "nikhil", age: 25 },
//       { name: "nikhil", age: 23 },
//     ],
//     "nikhil"
//   )
// );

// // 4. Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

// const pickFirstAndSecond = ([first, second]) => ({ first, second });

// console.log(pickFirstAndSecond(["orange", "banana", "apple"]));

// console.log(pickFirstAndSecond(["red", "blue", "green"]));

// // 5. Convert the following code to ES6+ syntax with minimum number of characters.

// const startsWithA = (str) => (str.charAt(0) === "A" ? `Found` : "Not-Found");
// console.log(startsWithA("Akshita"));
// console.log(startsWithA("Jeena"));

// // 6. Write an ES6 function to return only the first character of the given array.

// const printFirstCharacter = (char) => char[0];

// console.log(printFirstCharacter([1, 2, 3, 5, 8]));

// // 7. Write a function to return the last 5 characters as an array from the given array.

// const printLastFiveCharacter = items => {
//   let lastFiveEle = [];
//   let j = 0;
//   for(let i = 0; i < items.length ; i++) {
//     if(i >= items.length - 5) {
//      lastFiveEle[j] = items[i];
//      j++;
//     }
//   }
//   return lastFiveEle;
// }

// const printLastFiveCharacter = (char) => char.slice(-5);

// console.log(printLastFiveCharacter([1,2,3,4,5,6,7,8,9]));///
// // 8. Write an ES6 function to return the second element of the given array by multiplying 20 to it.

// const printSecondCharacter = (items) => items.slice(1, 2) * 20;
const printSecondCharacter = (items) => {
  let sum = 0;
  for(let i = 0; i < items.length ; i++) {
    if(i === 1) {
      sum = items[i] * 20;
    }
  }
  return sum;
}

console.log(printSecondCharacter([1, 4, 2, 3, 5, 8]));
// // 9. Write an ES6 function to return the second element of the given array by adding “Hello” before it.

// const sayHello = (items) => `Hello ${items.slice(1, 2)}`;

// console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]));
// // Hello Sweta

// console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]));
// // Hello Rakesh
// // 10. Write an ES6 function to return sum of all numbers at even indices of the given array.

// // Your ES6 code here

// const sumOfEvenIndices = (items) => {
//   let sum = 0;
//   for (let i = 0; i < items.length; i++) {
//     if (i === 0) {
//       sum = sum + items[i];
//     } else if (i % 2 === 0) {
//       sum = sum + items[i];
//     } else {
//       sum = sum;
//     }
//   }
//   return sum;
// };

// const sumOfEvenIndicesUsingMap = (items) => {
//   let sum = 0;
//   items.map((eachItems, index) => {
//     if (index === 0) {
//       sum = sum + eachItems;
//     } else if (index % 2 === 0) {
//       sum = sum + eachItems;
//     } else {
//       sum = sum;
//     }
//   });
//   return sum;
// };

// console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])); // 6
// console.log(sumOfEvenIndicesUsingMap([12, 14, 3, 27, 15, 25])); // 30

// // 11. Write an ES6 function to return the sum of only first 2 elements of the array .

// const sumFirstTwoElements = (items) => {
//   let sum = 0;
//   items.map((eachItems, index) => {
//     if (index === 0) {
//       sum = sum + eachItems;
//     }
//     if (index === 1) {
//       sum = sum + eachItems;
//     } else {
//       return;
//     }
//   });
//   return sum;
// };

// console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])); // 14
// console.log(sumFirstTwoElements([12, 14, 3, 27, 15])); // 26

// // 12. Write an ES6 function to return the first element which is a multiple of 5 in the given array.
// const printMultipleOfFive = (items) => {
//   return items.filter((eachitems) => {
//     return eachitems % 5 === 0;
//   });
// };

// const printMultipleOfFiveUsingForLoop = (items) => {
//   let element;
//   for (let i = 0; i < items.length; i++) {
//     if (items[i] % 5 === 0) {
//       element = items[i];
//       break;
//     }
//   }
//   return element;
// };

// const value = printMultipleOfFive([7, 4, 10, 7, 5, 3]); // 10
// const value1 = printMultipleOfFive([7, 5, 10, 7, 15, 3]); // 5
// const value3 = printMultipleOfFiveUsingForLoop([7, 4, 10, 7, 5, 3]); // 10
// const value4 = printMultipleOfFiveUsingForLoop([7, 5, 10, 7, 15, 3]); // 5
// console.log(value[0]);
// console.log(value1[0]);
// console.log(value3);
// console.log(value4);

// // 13. Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.

// const userData = {
//   name: "Jane Doy",
//   postalCode: "12134",
//   city: "Germany",
// };

// const getAddress = ({ postalCode, city }) => ({ postalCode, city });

// console.log(getAddress(userData));
// // {postalCode: '12134', city: 'Germany'}

// // 14. Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.
// // Your ES6 code here

// const userData1 = {
//   name: "Gaurav",
//   postalCode: "12134",
//   country: "Japan",
// };

// const userData2 = {
//   name: "Pritam",
//   postalCode: "560223",
//   country: "India",
// };

// const printData = ({ name, country }) => `${name} lives in ${country}`;

// console.log(printData(userData1)); // Gaurav lives in Japan
// console.log(printData(userData2)); // Pritam lives in India

// // // 15. Create a function which takes a product object and returns a sentence about the product using ES6 features.
// const product = {
//   name: "Apple MacBook Air 2020",
//   specification: {
//     capacity: "256GB",
//     size: "13.3 Inch",
//   },
//   price: 82900,
// };

// const printProductDetails = ({ name, specification: { capacity, size } }) => `${name} which is of ${size}, has a capacity of ${capacity}.`;

// console.log(printProductDetails(product)); // 
