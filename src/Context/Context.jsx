import React, { useReducer } from "react";
import axios from "axios";

export const generalContext = React.createContext();

const INIT_STATE = {
  todo: [
    {
      id: "",
      status: "",
      category: "",
    },
  ],
  oneTodo: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todo: action.payload };

    case "GET_ONE_TODO":
      return { ...state, oneTodo: action.payload };

    case "GET_FILTRED":
      return { ...state, todo: action.payload };

    // case "CHANGE_STATUS":
    //   return { ...state, todo: action.payload };

    default:
      return state;
  }
}

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE); //! не понятен
  const API = "http://localhost:8000/todos";

  // const [todo, setTodo] = useState("")

  async function addTodos(newTodo) {
    await axios.post(API, newTodo);
  }

  async function getTodos() {
    let res = await axios(API);
    dispatch({
      type: "GET_TODOS",
      payload: res.data,
    });
    console.log(res.data);
  }
  async function getTodoFiltred(category) {
    let res = await axios(API);
    dispatch({
      type: "GET_FILTRED",
      payload: res.data.filter((item) => item.category === category),
    });
  }

  async function deleteTodo(id) {
    await axios.delete(`${API}/${id}`);
    getTodos();
  }

  async function editTodo(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_TODO",
      payload: res.data,
    });
  }
  async function updateTodo(id, editedTodo) {
    await axios.patch(`${API}/${id}`, editedTodo);
    getTodos();
  }

  async function changeStatus(id) {
    let { data } = await axios.patch(`${API}/${id}`);
    await axios.patch(`${API}/${id}`, { status: !data.status });
    getTodos();
  }

  return (
    <generalContext.Provider
      value={{
        todo: state.todo,
        addTodos,
        getTodos,
        deleteTodo,
        editTodo,
        updateTodo,
        oneTodo: state.oneTodo,
        getTodoFiltred,
        changeStatus,
        // saveTodo
      }}
    >
      {children}
    </generalContext.Provider>
  );
};

export default TodoContextProvider;
