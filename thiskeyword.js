"use strict"

console.log(this);

function x(){
    console.log(this);
}
x();

//this substitution -> when using non strict mode then this inside a functional  scope refer to the global object(in browser means window object)
// but when uing strict mode then this inside functional scope is undefined

const obj1={
    name:"ankit",
    printName : function(){
        console.log(this);     // { name: 'ankit', printName: [Function: printName] }
    } 
}
obj1.printName();
const obj2={
    name:"aman"
}
obj1.printName.call(obj2);  // here this inside printName function  will refer to obj2


const name={
    firstName:"ankit",
    x: ()=>{
        console.log(this); // in this case this will refer to its existing lexical environment i.e global object
    }
}
name.x();

const name2={
    firstName:"aman",
    x: function printName(){
        const y=()=>{
            console.log(this);  //{ firstName: 'aman', x: [Function: printName] 
        }
        y();
    }
}
name2.x();


const foo=()=>{
    console.log("foofunc",this.name);  //undefined as this refer to global object in arrow function
}

foo.call({name:"ankit"});

const foo2=function(){
    console.log(this.name);   //ankit
}

foo2.call({name:"ankit"});



const object={
    id:'1234',
    name:'john'
}
object.id="345";
console.log("objectid",object.id);  //345

// Object.freeze(object);  // this will freeze the whole object , we cannot change any value of key
// object.id="456"; -> give error
//object.name='doe'->give error
console.log("objectidafterfreeze",object.id); //345

//to freeze only one key of object we can use Object.defineProperty

Object.defineProperty(object,'id',
    {
        writable:false,
        configurable:false  //prevents deletion or redefining the property.
    }
)
object.name="albert"
console.log("name after defineproperty",object.name);
// object.id="678";  ->give error
console.log("id after defineproperty",object.id);

