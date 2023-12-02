"use client";
import { IQuery } from "@/services/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

interface IShopPageContext {
  query: IQuery;
  setQuery: React.Dispatch<React.SetStateAction<IQuery>>;
  searchQuery: () => void;
  showMobileFilter: boolean;
  setShowMobileFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopPageContext = createContext({});

export const ShopPageProvider: React.FC<{
  children: React.ReactNode;
  category?: string;
}> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const { children, category } = props;
  const [query, setQuery] = useState<IQuery>({});
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const searchQuery = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    for (const detail in query) {
      params.set(detail, JSON.stringify(query[detail as keyof typeof query] || []));
    }
    if (category) {
      params.set("categories", JSON.stringify([category]));
    }
    router.push(pathname + "?" + params.toString());
  }, [category, pathname, query, router, searchParams]);

  const value = useMemo(
    () => ({
      query,
      setQuery,
      searchQuery,
      showMobileFilter,
      setShowMobileFilter,
    }),
    [query, searchQuery, showMobileFilter]
  );

  return <ShopPageContext.Provider value={value}>{children}</ShopPageContext.Provider>;
};

const useShopPage = (): IShopPageContext => useContext(ShopPageContext) as IShopPageContext;

export default useShopPage;
