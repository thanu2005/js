let bal=1000
if(bal>500){
  let ans="yes";
    console.log(`${ans}`);
}
//console.log(`${ans}`);//error as ans is out of scope,but if ans is var this step will be executed

//----------------------falsy values-----------------------
//0,-0,"",0n in BigInt,false,NaN,null,undefined

if(0n){
    console.log("hi");
}
else{
    console.log("bye");  
}


//----------------------true values----------------------------------
//"0",'false',[],{}," ",function(){}

//nullish coalescing Operator(??)---------->checks if returning value is null or not,if null returns alternate value
let val=5
c=val ?? 10
console.log(c);

let val1=null
c= val1 ?? 10
console.log(c);

//=== not only checks value but also type of it
/*
for(i=0;i<=10;i++){
    console.log(`I am ${i}`)
    if(i==5){
        console.log(`i am caught ${i}`)
    break;
    }
}*/



for(i=0;i<=10;i++){
   
    if(i==5){
        console.log(`i am caught ${i}`)
    continue;
    }
    console.log(`I am ${i}`)//continue skips this stmt only for 5
}


let arr=[1,2,3,4,5,6,7]
for(const i of arr){
    console.log(i);
}


let a="hello-wel-to-js"
for(const i of a){
    console.log(i);
}


//maps
const m=new Map()
m.set('a',100)
m.set('b',200)
m.set('c',300)
for(const n of m){
console.log(n)}


const m1=new Map()
m1.set('a',100)
m1.set('b',200)
m1.set('c',300)
for(const [key,value] of m1){
console.log(key,':',value)
}

const myob={
    js:"javascript",
    cpp:"C++",
    rb:"ruby"
}
for(const key in myob){
    console.log(`${key} is shortcut for ${myob[key]}`)
}

const mo=["bb","cc","dd","ee"]
mo.forEach(function(val){
console.log(val);
})

const w=[1,2,3,4,"ji"]
w.forEach((item)=>{
    console.log(item);  
})



//[{}{}{}]
const p=[
    {
        nm:"Js",
        no:1
    },{
        nm:"CSS",
        no:2
    },{
        nm:"C++",
        no:3
    }
]
p.forEach((item)=>{
    console.log(item.nm);
})

p.forEach(function(item){
    console.log(item.no)
})