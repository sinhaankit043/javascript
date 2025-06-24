// Currying is a technique where a function that takes multiple arguments is transformed into a sequence of 
// functions, each taking one argument.




//using bind method

function multiply(x,y){
    console.log('this==',this);  //{}
    console.log(x*y);           // 6
}

let multiplyByTwo= multiply.bind(this,2);
multiplyByTwo(3);

//using closure

function greeting(greet){
    return function (name){
        console.log(`${greet} ${name}`)
    }
}

let sayHello= greeting("Hello");
// console.log("sayhello==",sayHello);  -> Fn
sayHello("Ankit");

// or 
greeting("hey")("people");