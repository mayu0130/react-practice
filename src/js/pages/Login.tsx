import * as React from "react";
import { useAuth } from "../contexts/use-auth";
import { Box, Button, Heading, HStack, Input } from "@chakra-ui/react";

export const Login = () => {

const {login, userName, setUserName} = useAuth();
console.log("Loginコンポーネントのレンダー")

return(
  <Box as="main" w="400px" mx="auto" mt="10">
    <Heading mt="4" as="h1" size="xl">ログイン</Heading>
    <HStack spacing={4} mt={10}>
      <Input
        id="new-task"
        placeholder="ユーザ名"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        w={80}
      />
      <Button colorScheme='blue' size="sm" onClick={login}>ログイン</Button>
    </HStack>
  </Box>
  );
};