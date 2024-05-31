const id=123;
let mail="abc@gmail.com";
var nm="hello";
//accpass=1234;
mail="cherry@gmail.com";
nm="byee";
let accpass;
console.table([id,mail,nm,accpass]);


"use strict"//used to treat all js code as new version
//PRIMITIVE DT
//number=>2 ^53
//bigint=for very large number
//string ""
//boolean true/false
//null
//undefined
//symbol =unique (used in react)

//object
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof mail);


//Reference/non primitive==>arrays,objects,functions


let a=undefined;
let value=Number(a);
console.log(value);
console.log(typeof value);

//"23" converts to 23
//"23abc"          NaN(not a number) =>but typeof NaN is number
//null             0                                     number
//undefined        NaN                                   number
//true              1
//1                true
//""                false
//"js"             true

console.log(1+2+"2")//32
console.log("1"+2+2)//122
console.log(true);//true
console.log(+true);//1
console.log(+"");//0

let x=5;
x++;
console.log(x);//6
let y=1;
++y;
console.log(y);//2


console.log("2"==2);//true as conversion occurs
console.log("2"===2);//false as both r not same
//In == null won't be converted to 0,but in comparision operators will be converted to 0
