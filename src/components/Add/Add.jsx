import { Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { generalContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { Container} from "@mui/material";

const Add = () => {
  const { addTodos } = useContext(generalContext);
 
  const [todo, setTodo] = useState("");
  const [days, setDays] = useState("");
  const navigate = useNavigate();

  function handleSave() {
    if (!todo || !days) {
      alert("Заполните все поля!");
    } else {
      let newItem = {
        id: Math.random().toString(36).substring(2, 9),
        todo: todo,
        status: false,
        category: days,
      };
      addTodos(newItem);
      navigate("/list/");
    }
  }

  return (
    <div>
      <Container>
      <div>
        <select
          onChange={(e) => {
            const selectedDays = e.target.value;
            setDays(selectedDays);
          }}
        >
          <option value="monday">monday</option>
          <option value="tuesday">tuesday</option>
          <option value="wednesday">wednesday</option>
          <option value="thursday">thursday</option>
          <option value="friday">friday</option>
        </select>
      </div>
      <br />
     
      <InputGroup className="mb-3" style={{ width: "300px" }}>
        <Form.Control
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="todo"
          aria-label="name"
          aria-describedby="basic-addon2"
        />
        <Button
          onClick={() => handleSave()}
          variant="outline-secondary"
          id="button-addon2"
        >
          Save
        </Button>
      </InputGroup>
      </Container>
     
    </div>
  );
};

export default Add;
