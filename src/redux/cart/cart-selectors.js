import { createSelector } from 'reselect';


// the idea of reselect is to slice a layer (usually) off of our state, this is for memoization, more efficent, no rendering.
const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    (cart => cart.cartItems)

);
export const selectCartItemsCount = createSelector(
    [selectCartItems],
        cartItems =>
            cartItems.reduce(
                (acc, cartItem) =>
                    acc + cartItem.quantity,
                0)
)