// String

let intro =  "Hi this is batman";  //  -------> use the same quots in the staring and the end like this ("") or ('')  don't like this ("') or ('")

intro = "I'll be back";  //  -----> can use the single quots inside the double quots

intro = 'Im "Batman"';  // -----> can use the double quots inside the single quots

intro = "Im 'Batman'";  // -----> can use the single quots inside the double quots

//intro = 'I'll be back';  // -----> but can not use the single quots inside the single quots

//intro = "Im "Batman"";  // -----> can not use the double quots inside the double quots

intro = `this is Batman's car and " I'm BATMAN 🦇 "`;   // -----> you can use any qouts inside the backtick

// console.log(intro)

// Embeding

let embed = `1 + 2 = ${1+2}`;

embed = `1 + 2 = ${intro}`;

console.log(embed)

// You can also add strings, but strings will be concatenated:

let x = "John" + " " + "Doe";
console.log('x: ', x);


let y = "5" + 2 + 3;
console.log('y: ', y); //output  523

let z = 2 + 3 + "5";
console.log('z: ', z);  //output  55

