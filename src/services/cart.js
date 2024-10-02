//quais ações meu carrinho possa fazer 

//Adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);    

};

//Calcular o total
async function calculateTotal(userCart) {
    console.log("\nShopee Cart Total:");
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`🛒 Total: R$${result}`);

    
};
//Deletar item
async function dellItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {{
        userCart.splice(index, 1);
    };
}  
    
};
    
//Diminui item
async function removeItem (userCart, item){
    //1. Encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    //2. Caso não enconte o item
    if(indexFound == -1){
        console.log("item encitrado no index");
        return;

    }
    //3. item >1 subtrair um item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1 
        return;

    }
    //4. Caso item = 1 deleta o item
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
        return;
    }


    // const deleteIndex = index -1;

    // if(index >= 0 && index < userCart.length){
    //     userCart.splice(deleteIndex, 1);
    // }

};

async function displayCart(userCart) {
console.log("\nShopee cart list:");

userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal R$${item.subtotal()}`);
    
});
    
}

export {
    addItem, calculateTotal, dellItem, removeItem,displayCart,
};