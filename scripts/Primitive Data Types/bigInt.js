// BigInt

// 2 ˇ 53 − 1 = 9007199254740991

const limit = 9007199254740991;
 
console.log(limit + 1)  //correct output only when the odd number is added
console.log(limit + 2)  //wrong output only when the even number is added
console.log(limit + 3)  //correct
console.log(limit + 4)  //wrong


const limits = 9007199254740991n;  // adding "n" at the last of the number will declar it as a BigInt 
 
console.log(limits + 1n)  
console.log(limits + 2n)     // alway add a BigInt with another BinInt only
console.log(limits + 3n)  
console.log(limits + 4n)  

console.log (typeof limits)


let periyaNumber = 12345678910n 

console.log(periyaNumber +2024n)