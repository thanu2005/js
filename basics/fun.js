
const f=function(n1,n2)//parameters
{
return n1+n2
}
let res=f(10,20);//arguments
console.log(`Result is ${res}`);

const f1=function(nm){
    return `${nm} logged in`
}
console.log(f1("ts"))
console.log(f1())//undefined logged in
console.log(f1(""))//   logged in

const f2=function(a,b,...n){//to print all as an array at a time ,here ... is known as rest,other case spread
    return n
}
console.log(f2(10,20,30,100));

const ob={
nm:"ts",
sal:"50000"
}
function handle(anyobject){
    return (`Name is ${anyobject.nm} and salary is ${anyobject.sal}`)
}
console.log(handle(ob))


const b=[10,20,30,40,"ts"]
let arr=function(a)
{
    return a[4]
}
console.log(arr(b))//ts

let x=90
//var z=100;
if(true){
    let x=10;
    console.log(x);
    const y=20;
    var z=30;   
}
console.log(x);
//console.log(y);
//console.log(z);


function ff1(){
    const nm="hi"
    function f2(){
        const num=100;
        console.log(nm+num);
    }
  //  console.log(num); //error as num is out of scope
    f2()
}
ff1()

/******************** 
concept is tht child can take ice cream from parent but parent cannot take it from the child
here ff1 is parent and f2 is child
*/

console.log(w(10))
function w(n){
    return n+1
}

//concept of hoisting tht this type of fun declaration cannot accesss the value
//console.log(q(10))
const q=function(n){
    return n-1
}


const object={
    user:"ts",
    pass:"123",
  f:function(){
    console.log(`usernm is ${this.user}`)
    console.log(this);
  }
}
object.f()


const p=function(){
   let n="cccc"
    console.log(`${this.n}`);
    console.log(this);
}
p()


const p1=()=>{
    let n="cccc"
     console.log(`${this.n}`);
     console.log(this);
 }
// p1()
 

 //const l=(n1,n2)=> (n1+n2);//implicit 
 //console.log(l(9,9))



 //immediate invoked function
 //global scope ki pollution ki wajah se,global variables and all ki pollution ko clear karne ke liye we use iif
 (function ts(){
        console.log(`hello`);
    })();//to end this we use ;

 (
    (nm)=>{
        console.log(`hoooo ${nm}`);
    }
 )('cherry');