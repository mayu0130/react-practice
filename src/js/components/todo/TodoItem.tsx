import * as React from "react";
import { Button, Td, Tr } from "@chakra-ui/react";
import { memo } from "react";
import { useAuth } from "../../contexts/use-auth";

type Props = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};
export const TodoItem = memo(({
  id,
  task,
  person,
  deadline,
  deleteTodo,
}: Props) => {

  const { userName } = useAuth();

  return(
    <Tr color={userName === person ? "red" : ""}>
      <Td>{task}</Td>
      <Td>{person}</Td>
      <Td>{deadline}</Td>
      <Td><Button onClick={() => deleteTodo(id)} colorScheme="red" size="xs">
        削除
      </Button></Td>
    </Tr>
  );
});