import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

function findItem(items, productId) {
  return items.find((item) => item.id === productId);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = findItem(state.items, product.id);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => (item.id === action.payload ? false : true));
    },
    incrementQuantity(state, action) {
      const item = findItem(state.items, action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const item = findItem(state.items, action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        return;
      }

      state.items = state.items.filter((entry) => (entry.id === action.payload ? false : true));
    }
  }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
