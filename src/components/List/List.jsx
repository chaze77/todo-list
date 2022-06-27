import React, { useContext, useEffect } from "react";
import { generalContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { getContacts, contact, deleteContact, editContact } =
    useContext(generalContext);
  const navigate = useNavigate();

  console.log(contact);
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      {contact.map((item) => (
        <div key={item.id}>
          {item.contact}
          <button onClick={() => deleteContact(item.id)}>Delete</button>
          <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default List;
