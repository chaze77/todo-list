import React, { useContext, useEffect, useState } from "react";
import { generalContext } from "../../Context/Context";
import { useNavigate, useParams } from "react-router-dom";
import Category from "../Category/Category";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import "./List.scss";

const List = () => {
  const { getTodos, todo, deleteTodo, changeStatus } =
    useContext(generalContext);

  const navigate = useNavigate();

  let count = 0;
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].status == true) {
      count++;
    }
    console.log(count);
  }
  const todoPercantage = Math.ceil((count / todo.length) * 100);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="list">
      <Category />
      <p className="item__percent__text">percentage of completed tasks</p>
      <p className ={ todoPercantage >=50 ?"item__percent__green" : "item__percent__red" }>{todoPercantage}%</p>
      <div className="list__items">
        {todo.map((item) => (
          <li key={item.id} className={item.status ? "list__item__close" : ""}>
            <div>
              <p className="item__name">{item.todo}</p>{" "}
              <p className="item__category">{item.category}</p>
            </div>

            <div className="buttons">
              <Button
                style={{
                  width: "80px",
                  height: "50px",
                }}
                variant="contained"
                color="error"
                size="medium"
                onClick={() => deleteTodo(item.id)}
              >
                <DeleteForeverIcon />
              </Button>
              <Button
                style={{
                  width: "80px",
                  height: "50px",
                }}
                variant="contained"
                size="small"
                onClick={() => navigate(`/edit/${item.id}`)}
              >
                <EditIcon />
              </Button>
              <Button
                style={{
                  width: "80px",
                  height: "50px",
                }}
                variant="contained"
                color="success"
                onClick={() => changeStatus(item.id)}
              >
                {!item.status ? <LockClockOutlinedIcon /> : <LockOpenIcon />}
              </Button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default List;
