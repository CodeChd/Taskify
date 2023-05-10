import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import Todolists from "./components/Todolists";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleClick = (e: React.FormEvent) => {
      e.preventDefault()


      if(todo){
        setTodos([...todos, {id: Date.now(), todo, isDone: false }])
        setTodo("")
      }
  }

  return (
    <div className="App">
      <span className="heading ">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleClick={handleClick}/>

      <Todolists todos={todos} setTodos={setTodos} />
    </div>

  );
};

export default App;
