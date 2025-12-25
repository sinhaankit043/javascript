const arr1=['one','two','three'];
const str="hello";
let a1=arr.includes('on');
let b1= arr.includes('onetwo');
let c1= str.includes('ll');
// console.log(a);
// console.log(b);
// console.log(c);

let obj1={
    name:"ankit",
    address:{
        city:"mumbai",
        street:{
            road:"123"
        }
    }
}

let obj2={...obj1}; //shallow copy
obj2.name="aman";
obj2.address.city="goa";
obj2.address.street.road="345"
// let obj3=obj1;
// obj3.name="ayush";
console.log(obj2.name); //aman
console.log(obj1.name); //ayush
console.log(obj2.address.city);//goa
console.log(obj1.address.city);//goa.  with the shallow copy only parent level property is copied by value , nested one is still copied by reference
console.log(obj2.address.street.road)//345

const deepObj=JSON.parse(JSON.stringify(obj1));
deepObj.address.city="kolkata";
console.log(obj1.address.city);// goa as 



function curryFn(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}
// console.log(curryFn(2)(3)(2));
// const k=curryFn(2);
//  const l=k(3);
//  console.log(l);
//  const m=l(2);
//  console.log(m);



 const str1="hello";
 const str2="world123";
 


 
 function mergeString(str1,str2){
     const n=str1.length;
     const m=str2.length;
     let i=0;j=0;
     let  ans="";

     while(i<n && j<m){
        ans+=str1[i];
        ans+=str2[j];
        i++;
        j++;
     }
     while(i<n){
        ans+=str1[i];
        i++;
     }
      while(j<m){
        ans+=str2[j];
        j++;
     }
     return ans;

 }

//  console.log(mergeString(str1,str2));

function flatten(arr){
    let res=[];
    let size=arr.length;
    for(let i=0;i<size;i++){
        if(Array.isArray(arr[i])){
             let size1=arr[i].length;
             for(let j=0;j<size1;j++){
            res.push(arr[i][j]);
        }
        }
        else{
            res.push(arr[i]);
        }
        
    }
    return res;

}

const arr=[1,[1,2],[3,4],[5,6]];
// const newArr= arr.flat();
const newArr= flatten(arr);
console.log(newArr);

const nums=[1,2,3];
const res=nums.flatMap((num)=>[num,num*2]);
console.log(res);




function foo(){
   x=10;
 
}
k=20;
foo();
console.log(x);//10 in non-strict mode
console.log(k);//20 in non-strict mode

// but with the strict mode we have to declare variable with a keyword else it will give reference error

let n=5;
function hoo(){
    let n;
    console.log(n);
  n=4;
  console.log(n);
}
hoo();
console.log(n);

foo();
var foo=20;
function foo(){
    console.log("foo calling");
}
// foo(); -> this will give error as foo is not a function
console.log(foo);


function abc(){
    console.log("abc calling");
    return "hey"
    // return {name:"ankit"}// here if we return non-primitive datatype the result willbe assign to this value but not for the primitive data type
    

}
new abc();// -> constructor call and its always return object either explicit object or empty object
const result= new abc();
// const result=abc(); // this will return "hey" as it is normal function call
console.log(result);// abc {}



let a=10;
var b=20;
var c=30;
function foo1(){
  let a=5;
  var b=50;
  c=40;
}
foo1();
console.log(a);//10
console.log(b);//20
console.log(c);//40

{
  let a=5;
  var b=60;
}
console.log(a);//10
console.log(b);//50