import { IProduct } from "@/services/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProductSlice {
  likes: IProduct[];
  compares: IProduct[];
  cart: { product: IProduct; amount: number }[];
}

export const productSlice = createSlice({
  name: "product",
  initialState: {
    likes: [],
    compares: [],
    cart: [],
  } as IProductSlice,
  reducers: {
    likeProduct(state, { payload }: PayloadAction<IProduct>) {
      const newLikes = [...state.likes, payload];
      state.likes = newLikes;
    },
    unLikeProduct(state, { payload }: PayloadAction<number>) {
      const newLikes = state.likes.filter((l) => l.id !== payload);
      state.likes = newLikes;
    },
    addProductCompare(state, { payload }: PayloadAction<IProduct>) {
      const newCompare = [...state.compares, payload];
      state.compares = newCompare;
    },
    removeProductCompare(state, { payload }: PayloadAction<number>) {
      const newCompare = state.compares.filter((l) => l.id !== payload);
      state.compares = newCompare;
    },
    clearCompare(state) {
      state.compares = [];
    },
    addProductCart(state, { payload }: PayloadAction<IProduct>) {
      const index = state.cart.findIndex((p) => p.product.id == payload.id);
      if (index == -1) {
        const newCart = [...state.cart, { product: payload, amount: 1 }];
        state.cart = newCart;
      } else {
        state.cart[index] = { product: payload, amount: state.cart[index].amount + 1 };
      }
    },
    reduceProductCart(state, { payload }: PayloadAction<number>) {
      const index = state.cart.findIndex((p) => p.product.id == payload);
      if (index == -1) {
        return;
      }
      if (state.cart[index].amount > 1) {
        state.cart[index].amount--;
      } else {
        state.cart.splice(index, 1);
      }
    },
    removeProductCart(state, { payload }: PayloadAction<number>) {
      const index = state.cart.findIndex((p) => p.product.id == payload);
      if (index == -1) {
        return;
      }
      state.cart.splice(index, 1);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  likeProduct,
  unLikeProduct,
  addProductCart,
  addProductCompare,
  clearCart,
  clearCompare,
  reduceProductCart,
  removeProductCompare,
  removeProductCart,
} = productSlice.actions;
