import SingleTodo from "./SingleTodo";
import { Todo } from "./model";


interface Props {

    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const Todolists: React.FC<Props> = ({ todos, setTodos }) => {
  return <div className="todos">
    {todos.map((todo) => (
       <SingleTodo todo={todo} key={todo.id}
       todos={todos}
       setTodos={setTodos}/>
    ))}
    </div>;
};

export default Todolists;
