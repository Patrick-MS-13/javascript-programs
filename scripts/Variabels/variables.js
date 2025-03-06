// variable declaration
let bookName;

// variable initialisation
bookName = "Harry Potter"

// Logging the output

// console.log(bookName);

/* 
    \n  -------> next Line
    \t  -------> give some space 
 */


let school = "DHSS",
    subjects = "Tamil, English, Maths, Science, Social",
    marks = [92, 100, 80, 60, 99];  // Using an array to store marks
    student1 = "Elon Musk",
    student2 = "Mark Zuckerberg",
    student3 = "Sam Altman";

    // reasigning the values
    school = "VMS"
    student2 = student1

console.log(school, "\t", subjects, "\n", marks, "\n", student1, "\t", student2, "\t", student3);


// One Statement, Many Variables

// Start the statement with "let" and separate the variables by comma:

let person = "John Doe", carName = "Volvo", price = 200;


// A variable declared without a value will have the value undefined.

let carname;

console.log('carName: ', carname);


// Re-Declaring JavaScript Variables

// If you re-declare a JavaScript variable declared with "var", it will not lose its value.

var CarName = "Volvo";
var CarName = "car"

console.log('CarName: ', CarName);


// You cannot re-declare a variable declared with "let" or "const".

