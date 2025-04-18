import * as React from "react";
import { Button } from "../parts/button";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useAuth } from "../../contexts/use-auth";

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

  const { userName } = useAuth();
  const style = userName === person ? "text-red-600 font-bold" : "";
  return(
    <>
      <li className="grid grid-cols-4">
        <div>{task}</div>
        <div className={style}>{person}</div>
        <div>{deadline}</div>
        <div>
          <Button onClick={() => deleteTodo(id)} color="red">
            削除
          </Button>
        </div>
      </li>
    </>
  );
};