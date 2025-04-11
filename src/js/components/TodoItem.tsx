import * as React from "react";

type TodoItemProps = {
  task: string;
  deadline: string;
};

export const TodoItem: React.FC<TodoItemProps> =({ task, deadline }) => {
  return(
    <li>
      <p>{task} 締め切り：{deadline}</p>
    </li>
  );
};