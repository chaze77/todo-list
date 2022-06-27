import React, { useContext, useEffect, useState } from 'react';
import { generalContext } from '../../Context/Context';
import { useParams, useNavigate } from  "react-router-dom";
import { Button, Container } from 'react-bootstrap';

const Edit = () => {

    const {editContact, oneContact, updateContact} = useContext(generalContext);
    const [contact, setContact] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();
console.log(oneContact)
    useEffect(() => { 
        editContact(id);
      }, []);

    useEffect(() => {
        if (oneContact) {
          setContact(oneContact.contact);
        }
      }, [oneContact]);
      // console.log(addNewContact);

      function handleSave() {

        let editedContact = {

          contact,
        };
        updateContact (id, editedContact);
        navigate("/list");
        // console.log(editedContact);
      }
   

    return (
        <Container>
      {oneContact ? (
        <div>
          <input
            value={contact}
            onChange={event => setContact(event.target.value)}
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
