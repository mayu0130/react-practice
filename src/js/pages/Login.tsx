import * as React from "react";
import { useAuth } from "../hooks/use-auth";
import { Box, Button, Heading, HStack, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const { isLoggedIn, isLoginCheckDone, login, userName, setUserName } = useAuth();
  const navigate = useNavigate();

  console.log("Loginコンポーネントのレンダー");

  //ログイン中だった場合は,/todoに遷移させる
  useEffect(() => {
    if (isLoginCheckDone && isLoggedIn) {
      navigate("/todo");
    }
  }, [isLoginCheckDone, isLoggedIn]);

  if (!isLoginCheckDone || isLoggedIn) return null;

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