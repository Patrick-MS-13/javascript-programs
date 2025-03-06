/* The "let" keyword was introduced in ES6 (2015)

Variables declared with "let" have Block Scope

Variables declared with "let" must be Declared before use

Variables declared with "let" cannot be Redeclared in the same scope


Block Scope:

Before ES6 (2015), JavaScript did not have Block Scope.

JavaScript had Global Scope and Function Scope.

ES6 introduced the two new JavaScript keywords: "let" and "const".

These two keywords provided Block Scope in JavaScript */


/* Example

Variables declared inside a { } block cannot be accessed from outside the block: */

{
    let x = 2;
}
// x can NOT be used here


/* Global Scope

Variables declared with the var always have Global Scope.

Variables declared with the var keyword can NOT have block scope: */

{
    var x = 2;
}
// x CAN be used here



/* Global Scope

Variables declared with the var always have Global Scope.

Variables declared with the "var" keyword can NOT have block scope:


Example

Variables declared with varinside a { } block can be accessed from outside the block:
 */
{
    var x = 2;
}
// x CAN be used here


/* Cannot be Redeclared

Variables defined with "let" can not be redeclared.

You can not accidentally redeclare a variable declared with "let".

With "let" you can not do this: */

let x = "John Doe";

let x = 0;

console.log('x: ', x);

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

// With "let", redeclaring a variable in the same block is "NOT allowed":

// Example

var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let X = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}

// Redeclaring a variable with "let", in another block, "IS allowed":

// Example

let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}


/* Variables defined with "var" can be redeclared.

Redeclaring a JavaScript variable with var is allowed anywhere in a program

With "var" you can do this: */

var x = "John Doe";

var x = 0;

console.log('x: ', x);

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2