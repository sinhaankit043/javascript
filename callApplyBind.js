let name={
    firstName:"Ankit",
    lastName:"Kumar",
    printName:function(){
       console.log( this.firstName+" "+this.lastName);   // this bascially refers to name object
    }
}
let name2={
     firstName:"Ankit",
    lastName:"Sinha"
}
name.printName();     //Ankit Kumar
name.printName.call(name2); //Ankit Sinha   -> with the call method we set the this to name2


//so rather than doing like above we define that common function separtely

let name3={
    firstName:"Ankit",
    lastName:"Dev",
}
let name4={
     firstName:"Ankit",
    lastName:"Singh"
}

function printName(hometown, state){
    console.log(this.firstName+" "+this .lastName +" from "+ " "+ hometown +" "+state);
}
printName.call(name3, "Nawada","Bihar");   // Ankit Dev from  Nawada Bihar

printName.apply(name3,["Patna","Bihar"])   // with apply we need to pass other parameter with an array

let printNameFn= printName.bind(name3, "Nalanda","Bihar");  // bind return function that needs to be invoked later
console.log("printNameFn",printNameFn); // printNameFn [Function: bound printName]
printNameFn();               // Ankit Dev from  Nalanda Bihar


