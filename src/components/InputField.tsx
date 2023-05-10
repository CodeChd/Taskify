import { useRef } from "react";
import "./styles.css";

interface InputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleClick: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputProps> = ({ todo, setTodo, handleClick }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => {
        handleClick(e)
        inputRef.current?.blur()

        }}>


      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Store a task"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
