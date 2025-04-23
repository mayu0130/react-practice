import * as React from "react"
import { useTodoList } from "./components/todo/use-todo-list";
import { useTimer } from "./components/todo/use-timer";
import { useAuth } from "./contexts/use-auth";
import { Login } from "./pages/Login";
import { Todo } from "./pages/Todo";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom";
import { create } from "framer-motion/client";
import { ChakraProvider } from "@chakra-ui/react";
import { TodoDetail } from "./pages/TodoDetail";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/todo" replace={true} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/todo/:id" element={<TodoDetail />} />
      <Route path="*" element={<NotFound />} />
    </>
  ),
);

export const App = () =>{
  return (
      <RouterProvider router={router} />
  );
};