import React from "react";
import App from "./App";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "@apollo/link-context";

const httpLink = new HttpLink({
  uri: `https://discussionforumapi.herokuapp.com`,
});

const authLink = setContext(() => {
  const token = localStorage.getItem("discussionForumToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
