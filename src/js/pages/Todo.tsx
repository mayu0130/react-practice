import * as React from "react";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/TodoList";
import { useTodoList } from "../components/todo/use-todo-list";
import { useAuth } from "../contexts/use-auth";
import { Avatar, Box, Button, Heading, HStack, Input } from "@chakra-ui/react";
import { TodoTable } from "../components/todo/TodoTable";

export const Todo = () => {

  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList();
  // const { time } = useTimer();
  const { logout, userName } = useAuth();
  console.log("Todoコンポーネントのレンダー")

  return(
    <Box as="main" w="720px" mx="auto" mt="10">
      <HStack justify="space-between">
        <Heading as="h1" size="2xl">TODO</Heading>
        <HStack as="header" spacing='4' justify="end">
        <HStack spacing='2'>
          <Box><Avatar bg='teal.500' size="sm"/></Box>
          <Box>{userName}さん</Box>
        </HStack>
        <Box>
          <Button onClick={logout} colorScheme="red" size="sm">ログアウト</Button>
        </Box>
        </HStack>
      </HStack>
      {/* <div>タイマー： {time}</div> */}
      <Box mt="20" as="section">
        <Heading as="h2" size="xl">新規TODO作成</Heading>
        <Box mt="10">
          <NewTodoForm addTodo={addTodo}/>
        </Box>
      </Box>
      <Box mt="20" as="section">
        <Heading as="h2" size="xl">TODO一覧</Heading>
        <Box mt="10">
          <Input placeholder="絞り込み" id="filter-word" value={filterWord} onChange={(e) => setFilterWord(e.target.value)} w={80}/>
        </Box>
        <Box mt="10">
          <TodoTable todoList={todoList} deleteTodo={deleteTodo}/>
        </Box>
      </Box>
    </Box>
    );
};