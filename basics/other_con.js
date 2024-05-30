const a=Symbol("123")
const b=Symbol("123")
console.log(a===b);//false
//typeof all nonprim/reference dt is OBJECT



//Stack memory=>primitive
//heap=>non prim

let name1="Cherry"
let anothernm=name1
anothernm="byee"
console.log(name1);//Cherry
console.log(anothernm);//byee

let one={
   nm:"JS",
   age:"hello@gmail.com"
}
let two=one;
two.age="bye@gmail.com";
console.log(two.age);
console.log(one.age);//both will return changed value only
console.log(typeof one);//object

let str="Web"
let sal=3000
console.log(`My name is ${str} and my salary is ${sal}`);

let x=new String("hi-this-is Javaa")
console.log(x[0]);
console.log(x.__proto__);
console.log(x.toUpperCase());
console.log(x.indexOf('a'));
console.log(x.charAt(2));
let c=x.substring(0,4);
console.log(c);
let d=x.slice(-15,);
console.log(d);
let kk=" th  ";
console.log(kk.trim());//th
console.log(x.split('-'));
const gmail="hello@gmail.com";
console.log(gmail.replace('@','$'));
console.log(gmail.includes('.'));//true



