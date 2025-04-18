import * as React from "react"
import { useTodoList } from "./components/todo/use-todo-list";
import { useTimer } from "./components/todo/use-timer";
import { useAuth } from "./contexts/use-auth";
import { Login } from "./pages/Login";
import { Todo } from "./pages/Todo";


export const App = () => {
  const {isLoggedIn} = useAuth();

  if(!isLoggedIn){
    return< Login />
  };
  return<Todo />


};
