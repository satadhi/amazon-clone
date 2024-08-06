import { createSlice } from '@reduxjs/toolkit';
import { cartItemState } from './cartItemState'

export const cartItemSlice = createSlice({
    name: 'cartItem',
    initialState: cartItemState,
    reducers: {
        updateItemCount: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            state.noOfItems = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateItemCount } = cartItemSlice.actions

export default cartItemSlice.reducer