import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleAPI";


function App() {
  const [toDo, setToDo] = useState([])
  const [text,setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
      <h1>To Do List</h1>

      <p>Please click one of the links to start the backend</p>
        
          <li><a href="https://todobackend-51sn.onrender.com/" target="_blank" rel="noopener noreferrer">View All Posts</a></li>
          <p>For testing view on postman <a href="https://todobackend-51sn.onrender.com" target="_blank" rel="noopener noreferrer">"https://todobackend-51sn.onrender.com/save"</a></p>
          <p>For testing update on postman <a href="https://todobackend-51sn.onrender.com" target="_blank" rel="noopener noreferrer">"https://todobackend-51sn.onrender.com/update"</a></p>
          <p>For testing delete on postman <a href="https://todobackend-51sn.onrender.com" target="_blank" rel="noopener noreferrer">"https://todobackend-51sn.onrender.com/delete"</a></p>
        

      <div className="top">
        <input type ="text" placeholder= "Add To Dos" value={text} onChange={(e)=> setText(e.target.value)}></input>
        <div
         className="add"
          onClick={ isUpdating ?
             () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
           : () =>addToDo(text, setText, setToDo)}>
          {isUpdating ? "Update" : "Add" }
        </div>
        </div>
        <div className="list">
          {toDo.map((item) => <ToDo
           key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)} 
            deleteToDo={() => deleteToDo(item._id, setToDo)}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
