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
        
          <li><a href="http://localhost:5000/" target="_blank" rel="noopener noreferrer">View All Posts</a></li>
          <li><a href="http://localhost:5000/save" target="_blank" rel="noopener noreferrer">Create Post</a></li>
          <li><a href="http://localhost:5000/update" target="_blank" rel="noopener noreferrer">Edit Post</a></li>
          <li><a href="http://localhost:5000/delete" target="_blank" rel="noopener noreferrer">Delete Post</a></li>
        

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
