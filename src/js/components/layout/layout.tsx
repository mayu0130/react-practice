import { HStack, Heading, Avatar, Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react/box";
import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/use-auth-store";

type Props = {
  title: string;
};

export const Layout = ({ title, children }: PropsWithChildren<Props>) => {
  const { isLoggedIn, isLoginCheckDone, logout, userName } = useAuthStore();
  const navigate = useNavigate();

  // ログアウト中にアクセスされたら、/loginに遷移させる
    useEffect(() => {
      if (isLoginCheckDone && !isLoggedIn) {
        navigate("/login");
      }
    }, [isLoginCheckDone, isLoggedIn]);

    if (!isLoginCheckDone || !isLoggedIn) return null;

  return(
    <Box as="main" w="720px" mx="auto" mt="10">
      <HStack justify="space-between">
        <Heading as="h1" size="2xl">{title}</Heading>
        <HStack as="header" spacing="4" justify="end">
          <HStack spacing="2">
            <Box><Avatar bg="teal.500" size="sm" /></Box>
            <Box>{userName}</Box>
          </HStack>
          <Box>
            <Button onClick={logout} colorScheme="red" size="sm">ログアウト</Button>
          </Box>
        </HStack>
      </HStack>
      {children}
    </Box>
  )
};