import React, { useReducer } from "react";
import axios from "axios";
export const generalContext = React.createContext();

const INIT_STATE = {
  contact:[],
  oneContact: null,
};

function reduser(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_CONTACTS":
          return {...state, contact: action.payload};

        case "GET_ONE_CONTACT":
            return {...state, oneContact: action.payload};

        default: return state
    }
}

const ContactContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reduser, INIT_STATE); //! не понятен
    const API = "http://localhost:8002/contacts";

  async function addContacts(newContact) {
    await axios.post(API, newContact);
  }

  async function getContacts () {
   let res =  await axios(API);
    dispatch ({
        type: "GET_CONTACTS",
        payload: res.data,
    })
  }

  async function deleteContact (id) {
     await axios.delete(`${API}/${id}`)
     getContacts()
  }

  async function editContact (id) {
   let res =  await axios(`${API}/${id}`)
    dispatch ({
        type: "GET_ONE_CONTACT",
        payload: res.data,
    })
    
  }
  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
   getContacts();
  }

  return (
    <generalContext.Provider value={{
        contact: state.contact,
        addContacts,
        getContacts,
        deleteContact,
        editContact,
        updateContact,
        oneContact: state.oneContact
    }}>{children}</generalContext.Provider>
  );
};

export default ContactContextProvider;