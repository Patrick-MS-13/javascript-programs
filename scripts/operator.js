// assignment operator is assigning a value to the variable 

// 7 + 3 = 10;
// + is a operator
// 7 , 3 is a operands 

// operator = unary and binary these are the 2 types of operator

// unary

let x = 1
x = -x
console.log('x: ', x);

let c = '11', d = '4';
let e = +c + +d;   //this method is called unary +
console.log('e: ', e);


// binary  = + , - , * , / , % , **  ( % = modulo operator it gives the reminder number after division )

/* 
(** = is the exponentiation operator used to raise a number to the power of another number
In this case, 3 raised to the power of 2 ( or 3 ** 2 ) equals 9.)
*/

let a = 12, b = 8;
let sum = a % b;
console.log('sum: ', sum);


// chaing assignement 

let h = k = l = 12;
console.log(h, k, l);


// modify in place

let f = 5;
f += 6;
console.log('f: ', f);


// Increment and Decrement

let y = 7;
++y   // pre Increment
y++;  // post Increment
console.log('y: ', y);

let n = 12;
 b = 13;

 c = ++n + b--
 console.log('c: ', c); 
