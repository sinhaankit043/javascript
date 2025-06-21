function a(){
    var x=7;
    console.log("value of x in function a",x)
    function b(){
        console.log("value of x in function b",x);
    }
   return b;
}
var k=a();
console.log("k==",k); //[Function: b]
k();       //value of x in function b 7    -> this means function b while returning remember it lexical scope as well , this is called as closure

//a-> fn(){}
// on invokation of  function a() execution context will be created of fn a
//x->7
//b->fn(){}