const count=(()=>{
    let cnt=0;
     function inner (){
        cnt++;
        return cnt;
    }
    inner.reset=function(){
        cnt=0;
    }
    return inner;
})();

// console.log(count());
// console.log(count());
// console.log(count());
// count.reset();
// console.log(count());



function memo(fn){
    let cache=new Map();
    return function(...args){
        const key=args.join("_");
        if(cache.has(key)){
            console.log("fetching from cache");
            return cache.get(key);
        }
        else {
            const result=fn(...args);
            cache.set(key,result);
            return result;
        }
    }
}

function add(a,b){
    return a+b;
}
let addMemo=memo(add);
console.log(addMemo(1,2));
console.log(addMemo(1,2));




//debounce implementation

function debounce(fn,delay){
    let timer;
    return function(...args){
        clearInterval(timer);
        timer=setTimeout(()=>{
            fn.apply(this,args);
        },delay);
    }
}

function logInput(value){
    console.log("Api called with "+value+"times");
}

const deboucedLog=debounce(logInput,1000);
let i=0;
const interval=setInterval(()=>{
    deboucedLog("input"+i);
    i++;
    if(i==5)clearInterval(interval);
},300)




//throttle implementation
function throttle(fn,delay){
    let isThrottled=false;
    return function(...args){
        if(!isThrottled){
            fn.apply(this,args);
            isThrottled=true;
            setTimeout(()=>{
               isThrottled=false;
            },delay)
        }

    }
}









const obj = {
  "Name Id": ["ankit", "kumar"],
  age: [21, 24]
};

const obj2 = {
  ...obj,
  ["Name Id"]: [...obj["Name Id"], "sinha"]
};

console.log(obj2["Name Id"]);   //[ 'ankit', 'kumar', 'sinha' ]