const arr=[1,2,5,6,9];

function double(x){
    return x*2;
}
// const mappedArr= arr.map(double);
//or
const mappedArr= arr.map((x)=>(x*2));     // [ 2, 4, 10, 12, 18 ]

console.log("mappedArr",mappedArr);

const evenFilterArr= arr.filter((x)=>(x%2==0));
console.log("evenarr",evenFilterArr);      //[ 2, 6 ]

const reduceArr= arr.reduce((sum,curr)=>{
    if(curr%2==0){
       sum+=curr;
    }
   return sum;
},0);
console.log("reducearr",reduceArr);   // 8





const data=[
    {name:"ankit", age:"23", role:"developer", city:"Bengaluru"},
    {name:"aryan", age:"19", role:"analyst", city:"Hyderabad"},
    {name:"aman", age:"24", role:"developer", city:"Bengaluru"}
]

const res= data.filter((x)=>(x.age>20)).map((x)=>(x.name));
console.log("res==",res);   // [ 'ankit', 'aman' ]