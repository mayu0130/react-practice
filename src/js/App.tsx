import * as React from "react"
import { TodoList } from "./components/TodoList"
import { Heading } from "./components/Heading";

export const App = () => {
  return(
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <TodoList/>
    </main>
  );
};