import React, { useContext } from "react";
import { generalContext } from "../../Context/Context";
import { Container} from "@mui/material"
import "./Category.scss";

const Category = () => {
  const { getTodoFiltred } = useContext(generalContext);
  const categoriesDay = [
   
    { key: "monday", name: "monday" },
    { key: "tuesday", name: "tuesday" },
    { key: "wednesday", name: "wednesday" },
    { key: "thursday", name: "thursday" },
    { key: "friday", name: "friday" },
  ];
  //   console.log(categoriesDay);

  return (
    <Container>
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
    </Container>
  );
};

export default Category;
