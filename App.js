import React from "react";
import ReactDOM from "react-dom";

import CardContainer from "./Components/CardContainer";
import Header from "./Components/Header";

const rootElem = document.getElementById("root");

const root = ReactDOM.createRoot(rootElem);

const App = () => {
  return (
    <>
      <Header />
      <CardContainer />
    </>
  );
};

root.render(<App />);
