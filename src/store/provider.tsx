"use client";
import { Provider } from "react-redux";
import { store } from ".";
import React from "react";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
