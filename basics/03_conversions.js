// $$$$$$$$$$$$datatype conversions$$$$$$$$$$$$
// basic conversions 

// let score =33
// how to find that data came from front is a number 10 wali line se pata chalega...
// let score ="33"
// let score ="33abc"
// let score =true
// let score =false
// false convertr in zero...

// console.log(typeof score);
// console.log(typeof(score));
// ab sure ho gya ki number hi hoga..niche ki line likhane se 
// convert in number first latter is caps always of number or string or boolean
// let valueInNumber = Number(score) 
// console.log(typeof valueInNumber);
// ab pata kare ki actual uski value kya hai..
// console.log( valueInNumber);

// "33"=> 33 (number) convert in number..
// "33abc"=> NaN  ( not convert in number)
// true=>1,false=>0 (convert)
// convert in boolian
// let isLoggedIn =1
let isLoggedIn =""
let booleanisLoggedIn =Boolean(isLoggedIn)

console.log(booleanisLoggedIn);

// 1=true
// ""=false (empty value gives false value)
// "merababa"=>true

// string conversions.

let somenumber  =33;
// convert in String
let stringsomenumber =String(somenumber);
console.log(stringsomenumber);
// now check what type data is...
console.log(typeof stringsomenumber);

