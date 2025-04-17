import * as React from "react";
import { Button } from "../parts/button";

type Props = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};
export const TodoItem =({
  id,
  task,
  person,
  deadline,
  deleteTodo,
}: Props) => {

  return(
    <li className="grid grid-cols-4">
      <div>{task}</div>
      <div>{person}</div>
      <div>{deadline}</div>
      <div>
        <Button onClick={() => deleteTodo(id)} color="red">
          削除
        </Button>
      </div>
    </li>
  );
};