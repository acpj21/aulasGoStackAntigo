export function addToCartRequest(id){
    return {
            type: '@cart/ADD_REQUEST',
            product,
    };
}

export function addToCartSuccess(product){
    return {
            type: '@cart/ADD_SUCCESS',
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