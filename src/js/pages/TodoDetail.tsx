import React from "react";
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useTodoList } from "../hooks/use-todo-list";
import { Layout } from "../components/layout/layout";
import { NotFound } from "./NotFound";

export const TodoDetail = () => {

  let { id } = useParams();
  const { todoList } = useTodoList();

  const todo = todoList.find(todo => todo.id === id);

  if (!todo) return <NotFound></NotFound>;

  return (
    <Layout title="TODO詳細">
      <Box mt="20" as="section">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>タスク名</Th>
                <Th>担当者名</Th>
                <Th>締切</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{todo?.id}</Td>
                <Td>{todo?.task}</Td>
                <Td>{todo?.person}</Td>
                <Td>{todo?.deadline}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};