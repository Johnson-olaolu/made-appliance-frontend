import { gql } from "@apollo/client";
import createApolloClient from "./apollo-client";

const client = createApolloClient();
export interface IMenu {
  id: string;
  name: string;
  menuItems: {
    nodes: IMenuItems[];
  };
}

export interface IMenuItems {
  id: string;
  label: string;
}

export const fetchAllMenus = async () => {
  const { data } = await client.query({
    query: gql`
      query fetchAllMenus {
        menus {
          nodes {
            id
            name
          }
        }
      }
    `,
  });
  return data?.menus.nodes as IMenu[];
};

export const fetchSingleMenu = async (id: string) => {
  const { data } = await client.query({
    query: gql`
      query fetchSingleMenu {
        menu(id: "${id}") {
        id
          name
          menuItems {
            nodes {
              label
              id
            }
          }
        }
      }
    `,
  });
  return data?.menu as IMenu[];
};
