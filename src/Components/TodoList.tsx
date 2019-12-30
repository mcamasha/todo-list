import React from "react";
import List from "@material-ui/core/List";
import { TodoItem } from "./TodoItem";

interface IProps {
  todos: string[];
  onDeleteTodo: (index: number) => void;
}

export const TodoList = ({ todos, onDeleteTodo }: IProps) => (
  <List>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        index={index}
        todo={todo}
        onDeleteTodo={onDeleteTodo}
      />
    ))}
  </List>
);
