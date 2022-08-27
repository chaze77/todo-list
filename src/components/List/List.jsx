import React, { useContext, useEffect } from "react";
import { generalContext } from "../../Context/Context";
import { useNavigate, useParams } from "react-router-dom";
import Category from "../Category/Category";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Button } from "@mui/material";
import "./List.scss";

const List = () => {
  const { getTodos, todo, deleteTodo, changeStatus} = useContext(generalContext);

  const navigate = useNavigate();
  const { id } = useParams();

  // console.log(todo);
  useEffect(() => {
    getTodos();
  }, []);

  

  return (
    <div className="list">
      <Category />      
        <ol >
        {todo.map((item) => (
          
          <li key={item.id} className={!item.status ? "item__close" : ""}>
            {item.todo} <p>{item.category}</p>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
            <Button variant="contained" onClick={() => changeStatus(item.id)}>
              {item.status ? < LockClockOutlinedIcon/> : < LockOpenIcon/>}
            </Button>
          </li>
        
      ))}
      </ol>
    </div>
  );
};

export default List;
