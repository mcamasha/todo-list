import * as React from "react";
import { render } from "react-dom";
import Typography from "@material-ui/core/Typography";
import { TodoForm } from "./Components/TodoForm";
import { TodoList } from "./Components/TodoList";

import "./styles.css";

function App() {
  const [todos, setTodos] = React.useState<string[]>([]);

  const handleSaveTodo = (value: string) => {
    const newTodos = [...todos];
    newTodos.push(value);
    setTodos(newTodos);
  };
 
  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm onSaveTodo={handleSaveTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
