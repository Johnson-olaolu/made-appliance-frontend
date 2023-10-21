import "./globals.css";
import { Metadata } from "next";
import { ReduxProvider } from "@/store/provider";
import Layout from "@/components/layout/Layout";
import NextTopLoader from "nextjs-toploader";
import BrevoChat from "@/components/extras/BrevoChat";

export const metadata: Metadata = {
  title: "Made Apliances",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <ReduxProvider>
          <Layout>{children}</Layout>
        </ReduxProvider>
        <BrevoChat />
      </body>
    </html>
  );
}
