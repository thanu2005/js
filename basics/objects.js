const ob={}
ob.name="Cherry"
ob.sal="10000"
ob.dpt="CS"
console.log(ob)

const ob1={
    email:"a@gmail.com",
    nm:{
        fullnm:{
            first:"java",
            last:"script"
        }
    }
}
console.log(ob1.nm.fullnm)


const o1={1:'a',2:'b',nm:"ts"}
//two ways to access object
console.log(o1.nm)
console.log(o1[1])
const o2={3:'c',4:'d'}
o3=Object.assign(o1,o2)
console.log(o3)
o4={...o1,...o2}
console.log(o4)

//below return answer as an array
console.log(Object.keys(ob))
console.log(Object.values(ob))
console.log(Object.entries(ob))
console.log(ob.hasOwnProperty('sal'))//if present true


const sym=Symbol("hoo")
const oo={
    [sym]:"hii"
}
console.log(oo[sym])
Object.freeze(oo)

ob.z=function(){
    console.log("Bye")
}
console.log(ob.z())

ob.z=function(){
    console.log(`Bye ${this.name}`)
}
console.log(ob.z())

//instead of ob1.email
const {email}=ob1;
console.log(email)
