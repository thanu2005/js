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