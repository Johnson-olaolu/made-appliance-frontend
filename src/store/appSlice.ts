import { Action, combineReducers, createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { storeSlice } from "./storeSlice";

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
    language: string;
    currency: string;
  },
  reducers: {
    changeDarkMode(state, { payload }: PayloadAction<"dark" | "light">) {
      state.theme = payload;
    },
    changeLanguage(state, { payload }: PayloadAction<string>) {
      state.language = payload;
    },
    changeCurrency(state, { payload }: PayloadAction<string>) {
      state.currency = payload;
    },
    changeScreenSize(state, { payload }: PayloadAction<"Mobile" | "Tablet" | "Desktop">) {
      state.screenSize = payload;
    },
    clearStore() {},
  },
});

export const { clearStore, changeDarkMode, changeLanguage, changeScreenSize, changeCurrency } = appSlice.actions;

const reducers = combineReducers({
  app: appSlice.reducer,
  store: storeSlice.reducer,
});

export const combinedMiddleware = [];

export const rootReducer: Reducer = (state: ReturnType<typeof reducers>, action: Action) => {
  if (action.type === "app/clearStore") {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem("persist:root");
    // eslint-disable-next-line no-param-reassign
    state = {} as ReturnType<typeof reducers>;
  }
  return reducers(state, action);
};

export type RootState = ReturnType<typeof reducers>;
