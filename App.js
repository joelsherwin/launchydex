import React from "react";
import ReactDOM from "react-dom";

import CardContainer from "./Components/CardContainer";
import Header from "./Components/Header";
import About from "./Components/About";
import Previous from "./Components/Previous";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const rootElem = document.getElementById("root");

const root = ReactDOM.createRoot(rootElem);
const ErrorElement = () => {
  return <h1>Oops, something went terribly wrong</h1>;
};
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <CardContainer />,
      },
      {
        path: "/previous",
        element: <Previous />,
      },
    ],
  },
]);

root.render(<RouterProvider router={routes} />);
