function registerOrder() {
    const orderDetails = {
        name: 'Kurta',
        price: '300'
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(orderDetails)
        }, 3000);
    })

}


async function createOrder(){
    const data= await registerOrder();
    console.log("data==",data);                     
    console.log("hey from async await");
}

createOrder();
// output for createOrder will be printed after 3 sec as it wait for promise to get resolved

// data== { name: 'Kurta', price: '300' }
// hey from async await


//using promise then

function generateOrder(){
    const p= registerOrder();
    p.then((res)=>console.log(res));
    console.log("hey from promise implementation");
}

generateOrder();

//output for generatOrder will be printed instantly then after 3 sec promise then will be executed
// hey from promise implementation
// { name: 'Kurta', price: '300' }