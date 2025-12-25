const arr=[1,2,3,4];
const mapArr=arr.map((x)=>{
    return x*2;
})
// console.log(mapArr); //[ 2, 4, 6, 8 ]
const redArr= arr.reduce((acc,item)=>{
    if(item%2==0)acc+=item;
    return acc;
},0)
// console.log(redArr);//6

const filterArr= arr.filter((x)=>(x>2)).map((y)=>(y+1)); 
// console.log(filterArr); //[ 4, 5 ]


const cart=["shoe","shirt","pants"]
function createOrder(){
    const promise= new Promise((resolve,reject)=>{
         const orderDetails={
        item:"kurta",
        price:"500"
    }
     setTimeout(()=>{
       resolve(orderDetails)
       },2000)
    })
    return promise;
  
}

 async function requestOrder(){
     const data= await createOrder();
     console.log("data===",data);
     console.log("async await fuunctionality");
}

// requestOrder();

function generateOrder(){
    const pr=createOrder();
    pr.then((res)=>console.log("promise data",res));
    console.log("promise functionality");
}

// generateOrder();



for(var i=0;i<=5;i++){
    function close(i){
         setTimeout(()=>{
        console.log(i);
    },i*1000);
    }
     close(i);
  
}


