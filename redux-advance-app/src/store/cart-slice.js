import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
       addItemToCart(state, action) {
         const newItem = action.payload;
         const existingItem = state.items.find(item => item.id === newItem.id);
         if(!existingItem){
            state.items = [...state.items, newItem]
         } else {
            const items = state.items.filter(item => {
                if(item.id === newItem.id) {
                  item.totalQuantity += 1;
                  item.totalAmount = newItem.totalAmount;
                }
            });
            state.items = items;
         }
       },
       removeItemFromCart() {

       }
    }
});

export const uiActions = cartSlice.actions;

export default cartSlice;