import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

interface IProps {
  index: number;
  todo: string;
  onDeleteTodo: (index: number) => void;
}

export const TodoItem = ({ index, todo, onDeleteTodo }: IProps) => {
  const handleDeleteTodo = () => {
    onDeleteTodo(index);
  };

  return (
    <ListItem key={index.toString()} dense button>
      <Checkbox tabIndex={-1} disableRipple />
      <ListItemText primary={todo} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={handleDeleteTodo}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
