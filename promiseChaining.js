/**
   In the below example we do have control over each function when to call and with what parameter

   This is called as promise chaining, 
 */



function createOrder(item){
    console.log(`Placing an order for ${item}`)
    return new Promise((resolve,reject)=>{
        resolve(["OD-123",item]);
    })
}

function proceedPayment(data){
    const[orderId,item]=data;
    console.log(`Payment is processing for item:${item} with order-id ${orderId}`);
    const status=201;
    return new Promise((resolve,reject)=>{
        if(status==200){
            resolve({amount:"100",bank:"SBI"})
        }
        else{
            const err=new Error("Payment cant be processed");
            reject(err);
        }
       
    })
}

function paymentSummary(paymentInfo){
    console.log(`Payment Summary with amount ${paymentInfo.amount}`);

}




createOrder("shoe")
.then((res)=>proceedPayment(res))
.then((res)=>paymentSummary(res))
.catch((err)=>console.log(err.message));



async function placeOrder(){
    try{
         const orderId=await createOrder("shoe");
    const paymentInfo=await proceedPayment(orderId);
    await paymentSummary(paymentInfo);
    }
    catch(err){
        console.log(`Something went wrong with,${err.message}`);
    }
   
}

placeOrder();

