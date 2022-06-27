import React from "react";
import ContactContextProvider from "./Context/Context";
import Routing from "./components/Routing";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <ContactContextProvider>
      <Header />
      <Routing />
    </ContactContextProvider>
  );
};

export default App;