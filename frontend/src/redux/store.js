import { configureStore } from '@reduxjs/toolkit'
import cartItemReducer from '../redux/reducers/cartItem/cartItemReducer'
export default configureStore({
    reducer: {
        cartItem: cartItemReducer
    },
})