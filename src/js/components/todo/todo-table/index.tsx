import React, { memo } from "react";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { Todo } from "../../../types/type";
import { TodoItem } from "../todo-item";

type Props = {
  todoList: Todo[];
  deleteTodo: (id: string) => void;
};


export const TodoTable = memo(({ todoList, deleteTodo }:Props) => {
  console.log("TodoListコンポーネントのレンダー")
  return(
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>タスク名</Th>
            <Th>担当者名</Th>
            <Th>締切</Th>
            <Th>削除</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todoList.map((todo) =>
            <TodoItem
              key={todo.id}
              id={todo.id}
              task={todo.task}
              person={todo.person}
              deadline={todo.deadline}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
});