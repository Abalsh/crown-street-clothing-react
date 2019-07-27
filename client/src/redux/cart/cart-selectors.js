import { createSelector } from 'reselect';


// the idea of reselect is to slice a layer (usually) off of our state, this is for memoization, more efficent, no rendering.
const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    (cart => cart.cartItems)

);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
        cartItems =>
            cartItems.reduce(
                (acc, cartItem) =>
                    acc + cartItem.quantity,
                0)
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (acc, cartItem) =>
            acc + cartItem.quantity * cartItem.price,
        0)
)