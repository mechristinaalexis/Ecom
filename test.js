// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// console.log( arr.concat(arrayLike) ); 


// let arr1 = [1, 2];

// let arrayLike1 = {
//   0: "something",
//   [Symbol.isConcatSpreadable]: true,
//   length: 1
// };

// console.log( arr1.concat(arrayLike1) ); //


const arr2 = ["Bilbo", "Gandalf", "Nazgul"];

arr2.forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});