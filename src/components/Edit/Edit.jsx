import React, { useContext, useEffect, useState } from 'react';
import { generalContext } from '../../Context/Context';
import { useParams, useNavigate } from  "react-router-dom";
import { Button, Container } from 'react-bootstrap';

const Edit = () => {

    const {editTodo, oneTodo, updateTodo} = useContext(generalContext);
    const [todo, setTodo] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();
console.log(oneTodo)
    useEffect(() => { 
        editTodo(id);
      }, []);

    useEffect(() => {
        if (oneTodo) {
          setTodo(oneTodo.todo);
        }
      }, [oneTodo]);
      // console.log(addNewContact);

      function handleSave() {

        let editedTodo = {

          todo,
        };
        updateTodo (id, editedTodo);
        navigate("/list");
        // console.log(editedContact);
      }
   

    return (
        <Container>
      {oneTodo ? (
        <div>
          <input
            value={todo}
            onChange={event => setTodo(event.target.value)}
            label="Outlined"
            variant="outlined"
          />
          <Button onClick={handleSave} variant="outlined">
            Save
          </Button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
    );
};

export default Edit;
