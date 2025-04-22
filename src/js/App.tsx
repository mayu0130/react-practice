import * as React from "react"
import { useTodoList } from "./components/todo/use-todo-list";
import { useTimer } from "./components/todo/use-timer";
import { useAuth } from "./contexts/use-auth";
import { Login } from "./pages/Login";
import { Todo } from "./pages/Todo";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom";
import { create } from "framer-motion/client";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
    </>
  ),
);


export const App = () =>{
  return (
      <RouterProvider router={router} />
  );
};