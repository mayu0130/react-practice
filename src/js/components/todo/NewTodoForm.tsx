import * as React from "react";
import { TextField } from "../parts/TextField";
import { useState } from "react";
import { Button } from "../parts/button";

type Props = {
  addTodo: (newTask: string, newPerson: string, newDeadline: string) => void;
}

export const NewTodoForm = ({ addTodo }: Props) => {
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");
  console.log("NewTodoFormコンポーネントのレンダー")

  const addNewTodo = () => {
    addTodo(newTask, newPerson, newDeadline);
    setNewTask("");
    setNewPerson("");
    setNewDeadline("");
  };

  return (
    <div className="flex gap-2">
      <TextField id="new-task" label="タスク名" value={newTask} onChange={setNewTask} type="text"/>
      <TextField id="new-person" label="担当者名" value={newPerson} onChange={setNewPerson} type="text"/>
      <TextField id="new-deadline" label="締め切り" value={newDeadline} onChange={setNewDeadline} type="date"/>
      <Button onClick={addNewTodo} color="blue">追加</Button>
    </div>
  );
};