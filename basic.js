
console.log("value of x",x);
getName();
console.log("getname==",getName);

function getName(){
    console.log("Ankit");
}

// below getName will be considered as varibale as assign value as undefined during memory allocation
// var getName =function getName(){      
//     console.log("Ankit");      
// }
// var getName=()=>{
//     console.log("Ankit");
// }
var x=2;   // its value is assigned in global space
// window object is created in case of browser
// console.log("vlaue of x in window object",window.x);
// console.log("value of x in this object", this.x);

// console.log("value of y",y);   // Cannot access 'y' before initialization as const and let are hoisted but it is in temporal dead zone
let y= 6;
console.log("value of y",y);   

// Time between memory is allocated to let or const(Script Space) and its value is actually assign is known is temporal dead zone