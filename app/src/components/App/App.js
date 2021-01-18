import React from "react";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import Main from "../Main/Main";
import {Home} from "../../RootComponents/Home/Home";
import {BrowserRouter as Router} from "react-router-dom";

export const ConfigContext = React.createContext();

// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/graphql" // your graphql server link
  }),
  credentials: "same-origin",
})

const configValue = {
    urlBE: 'http://localhost:4000',
};


function AppRouter() {
  return (
      <div id="wrapper">
          <Router>
              <Main />
          </Router>
      </div>
  );
}

function App() {
  return (
      <ApolloProvider client = {client}>
          <ConfigContext.Provider value={configValue}>
              <AppRouter />
          </ConfigContext.Provider>
      </ApolloProvider>
  );
}

export default App;
