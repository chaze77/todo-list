import React from "react";
import TodoContextProvider from "./Context/Context";
import Routing from "./components/Routing";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <TodoContextProvider>
      <Header />
      <Routing />
    </TodoContextProvider>
  );
};

export default App;