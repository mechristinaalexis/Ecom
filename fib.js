var fib = function (n) {
  const arr = [0,1];

  for (let i = 2; i <= n; i++) {
    let j = 0
    console.log(arr[i-2] === arr[j])
    console.log(arr[i-1] === arr[j + 1])
    // arr.push(arr[i-1] + arr[i-2]);
    
  }

  // return arr[n]
}



fib(5)


// console.log("hello")
// const a = 1
// console.log(typeof(a));

// a.toString()

// console.log(typeof(a));

// a.map((num)=>{
// console.log(num+1)
// })

// console.log(a);

// console.log(typeof(a.toString()))


// const a = [1,2,3,4,5]

// console.log(a);
// console.log(a.reverse())

// const b = "ki ki"
// console.log(b.split());
// console.log(b.split(" "));

// var isPalindrome = (x)=> {
//   let a = x.split("").reverse().join("");
//   let b = a.toString();
//   return x === a;
// }

// console.log(isPalindrome("maalam"));
// // console.log(palindrome(104));

// var  optPalindrome = (num)=>{
//   return num < 0 ? false : num === +num.toString().split("").reverse().join("");
// }

// const res = optPalindrome(44);
// console.log(res);


