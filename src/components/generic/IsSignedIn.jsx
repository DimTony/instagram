/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Button } from "../ui/button";

const IsSignedIn = ({ handleStaySignedIn }) => {
  return (
    <>
      <Box
        display={{ md: "flex", base: "none" }}
        w="350px"
        p="36px"
        mb="1rem"
        border="1px solid rgb(219, 219, 219)"
      >
        <VStack fontSize="0.8rem" w="100%" h="100%" gap="1rem">
          <Image src="./images/sign.png" alt="logo" w="88px" h="92px" />
          <Text fontSize="1.2rem">Do you want to stay signed in?</Text>

          <VStack mt="2.5rem" w="100%" gap="0.5rem">
            <Button
              // mt="2.5rem"
              // mb="0.7rem"
              w="100%"
              bg="rgb(0, 149, 246)"
              // h="2rem"
              fontSize="14px"
              fontWeight="600"
              border="none"
              borderRadius="8px"
              _disabled={{
                opacity: "0.7",
                pointerEvents: "none",
                cursor: "default",
              }}
              // onClick={handleAuthValueSubmit}
              // disabled={isLoading || !isOtpValid}
            >
              Yes, stay signed in
            </Button>

            <Button
              // mt="2.5rem"
              // mb="0.7rem"
              w="100%"
              // bg="rgb(0, 149, 246)"
              bg="transparent"
              color="#000"
              _hover={{ color: "rgb(0, 149, 246)" }}
              // h="2rem"
              fontSize="14px"
              // fontWeight="600"
              border="none"
              borderRadius="8px"
              _disabled={{
                opacity: "0.7",
                pointerEvents: "none",
                cursor: "default",
              }}
              // onClick={handleAuthValueSubmit}
              // disabled={isLoading || !isOtpValid}
            >
              No, stay signed out
            </Button>
          </VStack>
        </VStack>
      </Box>

      <VStack display={{ md: "none", base: "flex" }} w="100%">
        <Image src="./images/sign.png" alt="logo" w="88px" h="92px" />

        <Text fontSize="1.2rem">Do you want to stay signed in?</Text>

        <VStack mt="2.5rem" w="100%" gap="0rem">
          <Button
            // mt="2.5rem"
            // mb="0.7rem"
            w="100%"
            bg="rgb(0, 149, 246)"
            // h="2rem"
            fontSize="14px"
            fontWeight="600"
            border="none"
            borderRadius="8px"
            _disabled={{
              opacity: "0.7",
              pointerEvents: "none",
              cursor: "default",
            }}
            onClick={() => handleStaySignedIn(true)}
          >
            Yes, stay signed in
          </Button>

          <Button
            // mt="2.5rem"
            // mb="0.7rem"
            w="100%"
            // bg="rgb(0, 149, 246)"
            bg="transparent"
            color="#000"
            _hover={{ color: "rgb(0, 149, 246)" }}
            // h="2rem"
            fontSize="14px"
            // fontWeight="600"
            border="none"
            borderRadius="8px"
            _disabled={{
              opacity: "0.7",
              pointerEvents: "none",
              cursor: "default",
            }}
            onClick={() => handleStaySignedIn(false)}
          >
            No
          </Button>
        </VStack>
      </VStack>
    </>
  );
};

export default IsSignedIn;
