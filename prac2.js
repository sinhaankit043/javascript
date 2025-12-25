class Human{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getName(){
        console.log("name is",this.name);
    }
    
}

class Student extends Human{
    constructor(name,age){
        // this.gender="male"   ->ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(name,age);
          this.gender="male"
    }
    getName(){
        super.getName();
        console.log("student name is",this.name+"and gender is",this.gender);
    }
}
const s1=new Student("ankit",23);
s1.getName();



const arr=['a','a','b','a','b','c'];
// function findMaxFreqChar(arr){
//     const obj={};
//     for(let i=0;i<arr.length;i++){
//         if(obj[arr[i]]){
//             obj[arr[i]]=(obj[arr[i]]+1);
//         }
//         else obj[arr[i]]=1;
//     }

//     let maxFreqChar='';
//     let maxFreq=0;
//     for(const [key,val] of Object.entries(obj)){
//        if(val>maxFreq){
//         maxFreq=val;
//         maxFreqChar=key;
//        }
//     }
//     return {maxFreqChar,freq:maxFreq};

// }
function findMaxFreqChar(arr){
    let mp=new Map();
    for(let i=0;i<arr.length;i++){
        mp.set(arr[i],(mp.get(arr[i])||0)+1);

    }
    let maxFreq=0,maxFreqChar='';
    // for(let key of mp.keys()){
    //     if(mp.get(key)>maxFreq){
    //         maxFreq=mp.get(key);
    //         maxFreqChar=key;
    //     }
    // }
      for(let [key,value] of mp){
        if(value>maxFreq){
            maxFreq=value;
            maxFreqChar=key;
        }
    }
  return {maxFreqChar,freq:maxFreq}
}
 console.log(findMaxFreqChar(arr));