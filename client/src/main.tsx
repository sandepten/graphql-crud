import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CreateUser from "./components/CreateUser";
import ReadData from "./components/ReadData";
import UpdateEmail from "./components/UpdateEmail";
import UserDetails from "./components/UserDetails";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/read",
    element: <ReadData />,
  },
  {
    path: "/user/:id",
    element: <UserDetails />,
  },
  {
    path: "/createUser",
    element: <CreateUser />,
  },
  {
    path: "/updateEmail",
    element: <UpdateEmail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
