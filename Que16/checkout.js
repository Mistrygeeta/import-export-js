const {cart, addItem} =require("./cart")

addItem({name: "shirt",price:500})
addItem({name: "kurti",price:1200})
addItem({name: "shorts",price:800})

const Totalprice= cart.reduce((total,item) =>{
    return total + item.price;
},0)
console.log(Totalprice)