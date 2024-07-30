import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";
import { Car } from "lucide-react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const result = todos.map((item, index) => (
    <Card
      key={item}
      text={item}
      checker={true}
      id={index}
      delete={() => handleDelete(index)}
    />
  ));

  function handleSubmit(e) {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }
  function handleDelete(id) {
    setTodos(todos.filter((item, index) => index !== id));
  }
  return (
    <>
      <section>
        <h1 className="text-blue-100 text-5xl font-bold text-center">todos</h1>
        <div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center items-center"
          >
            <input
              placeholder="Add todo..."
              type="text"
              name="todo"
              value={todo}
              onChange={handleChange}
              className="border rounded-2xl mt-4 p-3 w-10/12"
            />
            <button
              className="rounded-2xl absolute right-36 mt-3 text-xl 
              text-center px-4 h-8 bg-blue-200"
            >
              +
            </button>
          </form>
        </div>
        <div className="mt-4">{result}</div>
      </section>
    </>
  );
}

export default App;
