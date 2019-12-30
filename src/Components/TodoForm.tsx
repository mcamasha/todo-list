import * as React from "react";
import TextField from "@material-ui/core/TextField";

interface IProps {
  onSaveTodo: (todo: string) => void;
}

export const TodoForm = ({ onSaveTodo }: IProps) => {
  const [value, setValue] = React.useState<string>("");

  const handleSubmitForm = event => {
    event.preventDefault();

    const newTodo: string = value.trim();

    if (newTodo) {
      onSaveTodo(value);
      setValue("");
    }
  };

  const handleTodoChange = event => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={handleTodoChange}
        value={value}
      />
    </form>
  );
};
