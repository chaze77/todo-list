import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Add/Add";
import List from "./List/List";
import Edit from "./Edit/Edit";
import Category from "./Category/Category";

const Routing = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/list" element={<Category />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Routing;
