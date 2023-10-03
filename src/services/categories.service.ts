import { gql } from "@apollo/client";
import createApolloClient from "./apollo-client";

const client = createApolloClient();

export interface IProductCategory {
  id: string;
  link: string;
  name: string;
  slug: string;
}

export const fetchAllProductCategories = async () => {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        productCategories {
          nodes {
            id
            name
            link
            slug
          }
        }
      }
    `,
  });
  return data?.productCategories.nodes as IProductCategory[];
};
