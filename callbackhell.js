/**
  Example for callback hell
 */


function createOrder(item,cb){
    console.log(`Creating order for ${item}`);
    setTimeout(()=>cb("OD-123"),500);
}


function proceedPayment(orderId,cb){
    console.log(`Payment is processed for order-id ${orderId}`);
    setTimeout(()=>cb({amount:'100',bank:"HDFC"}),500);
}


function paymentSummary(paymentInfo){
    console.log(`Payment has been made with amount ${paymentInfo.amount}`);
    setTimeout(()=>console.log("Item shipped"),500);
}



createOrder("shoe",function(orderId){
    proceedPayment(orderId,function(paymentInfo){
        paymentSummary(paymentInfo);
    })
})




/**
 As in the above case , we are actually giving the of the callback function to be called by its parent fn i.e
 createOrder will call proceedPayment, this will call paymentSummary and so on,so we dont have control over it if 
 some issue happen in between, and this is called Inversion of Control  and nested structure is called Pyramid of Doom


 So to overcome this issue Promise come in to picture
 */