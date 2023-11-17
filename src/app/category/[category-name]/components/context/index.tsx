"use client";
import { IQuery } from "@/services/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

interface ICategoryPageContext {
  query: IQuery;
  setQuery: React.Dispatch<React.SetStateAction<IQuery>>;
  searchQuery: () => void;
}

const CategoryPageContext = createContext({});

export const CategoryPageProvider: React.FC<{
  children: React.ReactNode;
  category?: string;
}> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const { children, category } = props;
  const [query, setQuery] = useState<IQuery>({});

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
    }),
    [query, searchQuery]
  );

  return <CategoryPageContext.Provider value={value}>{children}</CategoryPageContext.Provider>;
};

const useCategoryPage = (): ICategoryPageContext => useContext(CategoryPageContext) as ICategoryPageContext;

export default useCategoryPage;
