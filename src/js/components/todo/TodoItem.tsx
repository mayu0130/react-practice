import * as React from "react";

type TodoItemProps = {
  task: string;
  person: string;
  deadline: string;
};

export const TodoItem: React.FC<TodoItemProps> =({ task, person, deadline }) => {
  return(
    <li className="grid grid-cols-3">
      <div>{task}</div>
      <div>{person}</div>
      <div>{deadline}</div>
    </li>
  );
};