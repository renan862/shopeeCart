import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"
const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!")

//adicionei dois itens do carrinho
const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwells lamborghini", 39.99, 3);

//deletei dois itens do carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

//await cartService.dellItem(myCart, item2.name);
//await cartService.dellItem(myCart, item1.name);



await cartService.calculateTotal(myCart);
