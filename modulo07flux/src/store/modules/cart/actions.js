export function addToCart(product){
    return {
            type: '@cart/ADD',
            product,
    };
}

export function removeFromCart(id){
    return {
        type: '@remove/REMOVE', 
        id
    }
}

export function updateAmount(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        id,
        amount,
    }
}