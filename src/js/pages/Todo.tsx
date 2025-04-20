import * as React from "react";
import { Heading } from "../components/parts/Heading";
import { Button } from "../components/parts/button";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/TodoList";
import { useTodoList } from "../components/todo/use-todo-list";
import { useAuth } from "../contexts/use-auth";
import { TextField } from "../components/parts/TextField";

export const Todo = () => {

  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList();
  // const { time } = useTimer();
  const { logout, userName } = useAuth();
  console.log("Todoコンポーネントのレンダー")

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
          <TextField label="絞り込み" id="filter-word" value={filterWord} onChange={setFilterWord} type="text"/>
        </div>
        <div className="mt-8">
          <TodoList todoList={todoList} deleteTodo={deleteTodo}/>
        </div>
      </div>
    </main>
    );
};