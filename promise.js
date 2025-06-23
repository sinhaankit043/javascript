const cart=["Shoes","Grocery","Electronics"]

api.createOrder(cart,function(){
    api.proceedToPayment(orderId,function(){
        api.showOrderSummary(paymentInfo,function(){
            api.updateWallet()
        })
    })
})

// in the above code we are calling createOrder function and once it get executed and return orderId then it will call next callback fucntion
// proceedToPayment and so on, here we are dependent on one call function to call next function and so on means , we gave the control to another
// function ,This is called as INVERSION OF CONTROL and the code keep of increasing horizontally ,such structure is called as Pyramid of Doom

//also when callback function is again and again is passed to the function , this is called as callback hell.


// so solve this , concept of Promise came in to picture
// Promise -> It is an object which represent eventual completion or failure of asynchronous operation.

function createOrder(cart){
   const pr= new Promise((resolve,reject)=>{
     const orderId="1234";
     const status=200;
     if(status==200){
       resolve(orderId);
     }
     else{
        const error= new Error("Error in creating order")
         reject(error);
     }
   })
   return pr;
}

function proceedToPayment(orderId){
    return new Promise((resolve,reject)=>{
        console.log("orderid",orderId);
        //db call to fetch orderDetails based of orderId
        const orderDetails ={
           productName:"Kurta",
           price:"300"
        }
        const paymentInfo={
            amount:"300",
            bank:"SBI",
            ifscCode:"SBI1234"
        }
        // payment transaction
        const status =100;
        if(status==200){
            console.log("payment successful",paymentInfo);
            resolve(paymentInfo);
            
        }
        else{
            const error= new Error("Error in processing payment");
            reject(error);
        }

    })
}
 

const promise= createOrder(cart);
promise.then((orderId)=>proceedToPayment(orderId))   // here we have control on function proceedToPayment 
.catch((err)=>console.log(err.message));
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err.message));
