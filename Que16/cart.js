// Create a module cart.js that exports a function to add items to an array. Import it in checkout.js and use reduce() to get the total price.
let cart = [];
function addItem(item){
    cart.push(item)
}

module.exports = {cart, addItem}