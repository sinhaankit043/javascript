function a(y){
    var z=1;
    setTimeout(y,3000);
    console.log("Ankit");
    y();
}
var y=function b(){
    console.log("callback function")
}
a(y);

//or
function k(){
    setTimeout(function(){
        console.log("setTime callback")
    },3000)
    console.log("function k");
}
k();
