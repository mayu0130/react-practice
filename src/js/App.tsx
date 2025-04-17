import * as React from "react"
import { TodoList } from "./components/todo/TodoList"
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";
import { useTodoList } from "./components/todo/use-todo-list";
import { useTimer } from "./components/todo/use-timer";


export const App = () => {
  const { todoList, addTodo, deleteTodo } = useTodoList();
  const { time } = useTimer();
  return(
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <div>タイマー： {time}</div>
      <div className="mt-8">
        <Heading level="h2">新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>
      <div className="mt-8">
        <Heading level="h2">TODO一覧</Heading>
        <div className="mt-8">
          <TodoList todoList={todoList} deleteTodo={deleteTodo}/>
        </div>
      </div>
    </main>
  );
};
