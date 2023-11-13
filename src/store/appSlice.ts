import { Currency, Language } from "@/utils/types";
import { AnyAction, combineReducers, createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import { productSlice } from "./productSlice";

const appSlice = createSlice({
  name: "app",
  initialState: {
    v1: {},
    theme: null,
    screenSize: "Desktop",
    language: "English",
    currency: "USD",
  } as {
    v1: object;
    theme: "dark" | "light" | null;
    screenSize: "Mobile" | "Tablet" | "Desktop";
    language: Language;
    currency: Currency;
  },
  reducers: {
    changeDarkMode(state, { payload }: PayloadAction<"dark" | "light">) {
      state.theme = payload;
    },
    changeLanguage(state, { payload }: PayloadAction<Language>) {
      state.language = payload;
    },
    changeCurrency(state, { payload }: PayloadAction<Currency>) {
      state.currency = payload;
    },
    changeScreenSize(state, { payload }: PayloadAction<"Mobile" | "Tablet" | "Desktop">) {
      state.screenSize = payload;
    },
    clearStore() {},
  },
});

export const { clearStore, changeDarkMode, changeLanguage, changeScreenSize } = appSlice.actions;

const reducers = combineReducers({
  app: appSlice.reducer,
  product: productSlice.reducer,
});

export const combinedMiddleware = [];

export const rootReducer: Reducer = (state: ReturnType<typeof reducers>, action: AnyAction) => {
  if (action.type === "app/clearStore") {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem("persist:root");
    // eslint-disable-next-line no-param-reassign
    state = {} as ReturnType<typeof reducers>;
  }
  return reducers(state, action);
};

export type RootState = ReturnType<typeof reducers>;
