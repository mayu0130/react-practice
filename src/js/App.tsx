import * as React from "react"
import { TodoList } from "./components/todo/TodoList"
import { Heading } from "./components/parts/Heading";
import { useState } from "react";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";


export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return(
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <div className="mt-8">
        <Heading level="h2">新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm setTodoList={setTodoList}/>
        </div>
      </div>
      <div className="mt-8">
        <Heading level="h2">TODO一覧</Heading>
        <div className="mt-8">
          <TodoList todoList={todoList}/>
        </div>
      </div>
    </main>
  );
};

export { Todo };
