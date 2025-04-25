import * as React from "react";
import { Box, Heading, Input } from "@chakra-ui/react";
import { TodoTable } from "../components/todo/todo-table";
import { Layout } from "../components/layout";
import { NewTodoForm } from "../components/todo/new-todo-form";
import { useTodoList } from "../hooks/use-todo-list";

export const Todo = () => {

  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList();
  // const { time } = useTimer();
  console.log("Todoコンポーネントのレンダー")

  return(
    <Layout title="TODO">
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
      </Layout>
  );
};