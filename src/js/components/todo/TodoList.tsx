import * as React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "../../App";

type Props = {
  todoList: Todo[];
};

export const TodoList = ({ todoList }:Props) => {
  return (
    <ul className="bg-emerald-100 p-4 rounded">
      <li className="grid grid-cols-3 font-bold">
        <div>タスク名</div>
        <div>担当者名</div>
        <div>締め切り</div>
      </li>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} person={todo.person} deadline={todo.deadline} />
      ))}
    </ul>
  );
};
