import Layout from "@/components/layout";
import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";
import localFont from "next/font/local";

const persistor = persistStore(store);

const cerebriSansPro = localFont({
  variable: "--font-cerebri-sans",
  src: [
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/font/Cerebri.Sans.Pro/CerebriSansPro-HeavyItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${cerebriSansPro.variable} font-cerebriSans text-ma-primary`}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </main>
  );
}
