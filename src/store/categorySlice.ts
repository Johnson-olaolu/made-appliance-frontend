import { ICategory, IProduct } from "@/services/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICategorySlice {
  category: ICategory[];
  subCategories: ICategory[];
}

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
    subCategories: [],
  } as ICategorySlice,
  reducers: {
    setCategory(state, { payload }: PayloadAction<ICategory[]>) {
      state.category = payload;
    },
    setSubCategory(state, { payload }: PayloadAction<ICategory[]>) {
      state.subCategories = payload;
    },
  },
});

export const { setCategory, setSubCategory } = categorySlice.actions;
