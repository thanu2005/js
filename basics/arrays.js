let arr=[0,1,2,3,4]
/*console.log(arr[3]);


//array methods
arr.push(9)//inserts at the last
console.log(arr);
arr.pop()//removes last ele
console.log(arr);
arr.unshift(10)//inserts at the beginning
console.log(arr);
arr.shift()//removes beg ele
console.log(arr);
console.log(arr.includes(10));//if present true else false
console.log(arr.indexOf(100));//if ele not present -1 else index of tht ele
console.log(typeof arr);//object



let myarray=arr.join()
console.log(myarray);//converts to string
console.log(typeof myarray);//string
*/

console.log(arr.slice(1,3));
console.log(arr);//no change in array after using slice

console.log(arr.splice(1,3));//prints 1,2,3 indices values
console.log(arr);//removes 1,2,3 indices values

array1=["hi","hello","haa"];
array2=["bye","boi","byeeee"];
//array1.push(array2);
//console.log(array1)//doesn't merge and stores as a subarray
array3=array1.concat(array2);//merges both
console.log(array3);


console.log(...array1,...array2);//returns all contents of both arrays but not in array format

a=[1,2,[3,4,5],[6,7,[8,9]],10]
console.log(a.flat(Infinity))//gives as single array
console.log(a.flat(1))//1 is depth,it means merges only one subarray

console.log(Array.isArray("Javascript"));//false as it is a string
console.log(Array.from("Javascript"));//['J','a',.........'t']

/************/
console.log(Array.from({nm:"Js"}));//need to specify keys as an array or values

let x=100,y=200,z=300;
console.log(Array.of(x,y,z))//combines all ele as an array







