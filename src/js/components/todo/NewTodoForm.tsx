import * as React from "react";
import { TextField } from "../parts/TextField";
import { useState } from "react";
import { Todo } from "../../App";

type Props = {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const NewTodoForm = ({ setTodoList }: Props) => {
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");

  const addNewTodo = () => {
    setTodoList((prev) => [...prev, {id: Date.now(), task: newTask, person: newPerson, deadline: newDeadline}]);
    setNewTask("");
    setNewPerson("");
    setNewDeadline("");
  };

  return (
    <div className="flex gap-2">
      <TextField id="new-task" label="タスク名" value={newTask} onChange={setNewTask} type="text"/>
      <TextField id="new-person" label="担当者名" value={newPerson} onChange={setNewPerson} type="text"/>
      <TextField id="new-deadline" label="締め切り" value={newDeadline} onChange={setNewDeadline} type="date"/>
      <button className="border rounded bg-cyan-400 w-16" onClick={addNewTodo}>追加</button>
    </div>
  );
};