// State is current state before the update
// Action is what we are trying to do
// The following function acts as an update method
const reducer = (state, action) => {
    // Set up a bunch of if statements to determine the action
    if (action.type === 'CLEAR_CART') {
        console.log('Clear Cart')
        return { ...state, cart: [] }
    }
    if (action.type == 'REMOVE') {
        console.log('Remove')
        return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) }
    }
    if (action.type == 'INCREASE') {
        // Copy the updated cart to the newCart
        console.log('Increase')
        let newCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            };
            return cartItem;
        })
        return { ...state, cart: newCart }
    }

    if (action.type == 'DECREASE') {
        console.log('Decrease')
        // The second filter was added so as to remove the item in case the number was decreased to be lower than 0
        let newCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
        })
            .filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: newCart }
    }
    // Executed whenever the cart changes [Total price and number of items in cart/amount]
    if (action.type === 'GET_TOTALS') {
        const { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            console.log(cartTotal)
            console.log(cartItem)
            const { price, amount } = cartItem
            // Add the newly updated amount by looping through the whole array
            const newItemTotal = price * amount
            cartTotal.total += newItemTotal
            cartTotal.amount += amount
            return cartTotal
        },
            {
                total: 0,
                amount: 0,
            })
        return { ...state, total, amount }
    }

    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }

    if (action.type === 'DISPLAY') {
        return { ...state, cart: action.payload, loading: false }
    }
    return state
}

export default reducer;