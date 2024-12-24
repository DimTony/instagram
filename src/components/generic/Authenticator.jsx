/* eslint-disable no-unused-vars */
import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Authenticator = () => {
  return (
    <>
      <Box
        display={{ md: "flex", base: "none" }}
        w="350px"
        p="36px"
        mb="1rem"
        border="1px solid rgb(219, 219, 219)"
      >
        Auth
      </Box>

      <VStack display={{ md: "none", base: "flex" }} w="100%">
        <Text>Auth</Text>
      </VStack>
    </>
  );
};

export default Authenticator;
