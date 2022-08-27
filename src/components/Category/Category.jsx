import React, { useContext } from "react";
import { generalContext } from "../../Context/Context";
import "./Category.scss";

const Category = () => {
  const { getTodoFiltred } = useContext(generalContext);
  const categoriesDay = [
    { key: "all", name: "all" },
    { key: "monday", name: "monday" },
    { key: "tuesday", name: "tuesday" },
    { key: "wednesday", name: "wednesday" },
    { key: "thursday", name: "thursday" },
    { key: "friday", name: "friday" },
  ];
  //   console.log(categoriesDay);

  return (
    <div className="category">
      {categoriesDay.map((el) => (
        <div
          key={el.key}
          className="category__style"
          onClick={() => getTodoFiltred(el.name)}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
