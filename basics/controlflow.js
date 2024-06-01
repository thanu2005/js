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