import { ShopPageProvider } from "./context";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <ShopPageProvider>{children}</ShopPageProvider>;
}
