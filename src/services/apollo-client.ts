import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://madeappliance.com/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
