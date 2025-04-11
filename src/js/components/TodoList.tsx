import * as React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = [
    {id: 123, task: '掃除', deadline: '明日まで' },
    {id: 456, task: '洗濯', deadline: '明後日まで' },
    {id: 789, task: '買い物', deadline: '今週まで' },
  ];

  return (
    <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} task={todo.task} deadline={todo.deadline} />
    ))}
    </ul>
  );
};
