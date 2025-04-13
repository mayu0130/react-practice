import * as React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = [
    {id: 123, task: '掃除', person: '山田', deadline: '明日まで' },
    {id: 456, task: '洗濯', person: '田中', deadline: '明後日まで' },
    {id: 789, task: '買い物', person: '鈴木', deadline: '今週まで' },
  ];

  return (
    <ul className="mt-4 ml-4  bg-emerald-100 p-4 rounded">
      <li className="grid grid-cols-3 font-bold">
        <div>タスク名</div>
        <div>担当者名</div>
        <div>締め切り</div>
      </li>
      {todos.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} person={todo.person} deadline={todo.deadline} />
      ))}
    </ul>
  );
};
