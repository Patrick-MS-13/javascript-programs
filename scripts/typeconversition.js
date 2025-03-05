
// impleset type conversion 

console.log('12'+'2'); //implecit type conversion except for this opration "+"
console.log('12'/'2');
console.log('12'*'2');
console.log('12'-'2');

// expliset type conversion 

let age = 23;
console.log(typeof age)
age = String(age)
console.log(typeof age)
 

let myAge = '20.28';
myAge = Number(myAge) 
console.log(myAge+3)


let codeNum = true;
codeNum = Number(codeNum) 
console.log(codeNum)



let y =  1111111;
console.log(typeof y);
y = Boolean(y)
console.log(typeof y);
console.log(y);

let x =  '';  // of their is any value it will covert into true other then their is empty string then it will conver it into false
console.log(x);
console.log(typeof x);
x = Boolean(x)
console.log(typeof x);
console.log(x);




