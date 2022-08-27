import React, { useContext, useEffect } from "react";
import { generalContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import Category from "../Category/Category";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Button } from "@mui/material";
import "./List.scss";

const List = () => {
  const { getTodos, todo, deleteTodo, editTodo } = useContext(generalContext);

  const navigate = useNavigate();

  console.log(todo);
  useEffect(() => {
    getTodos();
  }, []);

  const statusTodo = (id) => {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      console.log(item);
      return item;
    });
  };

  return (
    <div className="list">
      <Category />      
        <ol>
        {todo.map((item) => (
          <li className={!item.status ? "item__close" : ""}>
            {item.todo} <p>{item.category}</p>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
            <Button variant="contained" onClick={() => statusTodo(item.id)}>
              {item.status ? <LockOpenIcon /> : <LockClockOutlinedIcon />}
            </Button>
          </li>
        
      ))}
      </ol>
    </div>
  );
};

export default List;
