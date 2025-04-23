import { Box, Heading } from "@chakra-ui/react";
import React from "react";


export const NotFound = () => {
  return (
    <Box as="main" w="400px" mx="auto" mt="10">
      <Heading mt="4" as="h1" size="xl">
        404エラー
      </Heading>
      <Box>
        ページが見つかりませんでした。
      </Box>
    </Box>
  );
};