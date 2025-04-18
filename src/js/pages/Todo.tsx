import * as React from "react";
import { Heading } from "../components/parts/Heading";
import { Button } from "../components/parts/button";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/TodoList";
import { useTodoList } from "../components/todo/use-todo-list";
import { useAuth } from "../contexts/use-auth";

export const Todo = () => {

  const { todoList, addTodo, deleteTodo } = useTodoList();
  // const { time } = useTimer();
  const { logout, userName } = useAuth();

  return(
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
        <div>{userName}さん</div>
      <div>
        <Button onClick={logout} color="blue">ログアウト</Button>
      </div>
      {/* <div>タイマー： {time}</div> */}
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