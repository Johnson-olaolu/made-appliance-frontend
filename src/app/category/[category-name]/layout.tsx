import { CategoryPageProvider } from "./components/context";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <CategoryPageProvider>{children}</CategoryPageProvider>;
}
