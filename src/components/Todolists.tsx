import { Droppable } from "react-beautiful-dnd";
import SingleTodo from "./SingleTodo";
import { Todo } from "./model";
import "./styles.css";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completed: Todo[];
  setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolists: React.FC<Props> = ({
  todos,
  setTodos,
  completed,
  setCompleted,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosLists">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>

            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove  "
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>

            {completed.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={completed}
                setTodos={setCompleted}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Todolists;

{
  /* <div className="todos">
    {todos.map((todo) => (
       <SingleTodo todo={todo} key={todo.id}
       todos={todos}
       setTodos={setTodos}/>
    ))}
    </div>; */
}
