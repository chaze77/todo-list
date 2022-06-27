import { Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { generalContext } from '../../Context/Context';


const Add = () => {

const {addContacts} = useContext(generalContext);
// console.log(addContacts);
const [contact, setContact] = useState("")

function handleSave () {

    let newContact = {

        contact,
    }
addContacts (newContact)
}

    return (
        <div>
         <InputGroup className="mb-3" style = {{width: '300px'}}>
        <Form.Control
          value = {contact}
          onChange={(e)=> setContact(e.target.value)}
          placeholder="name"
          aria-label="name"
          aria-describedby="basic-addon2"
        />
        <Button   onClick = {()=> handleSave()} variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
            
        </div>
    );
};

export default Add;