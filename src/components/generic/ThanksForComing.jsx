/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ThanksForComing = () => {
  return (
    <>
      <Box
        display={{ md: "flex", base: "none" }}
        w="350px"
        p="36px"
        mb="1rem"
        border="1px solid rgb(219, 219, 219)"
      >
        <VStack w="100%" h="100%" alignItems="center">
          <Image
            src="./images/insta.png"
            alt="logo"
            w="175px"
            h="51px"
            mb="1.5rem"
          />

          <Text fontSize="1.2rem" fontWeight="600" mb="1rem">
            Sorry, this page isn't available
          </Text>

          <Text fontSize="0.9rem" textAlign="center" fontFamily="Roboto">
            The link you followed may be broken, or the page may have been
            removed.
            <Link to="https://www.instagram.com">
              <Text color="rgb(0, 149, 246)">Go back to Instagram</Text>
            </Link>
          </Text>
        </VStack>
      </Box>

      <VStack display={{ md: "none", base: "flex" }} w="100%" gap="0">
        <Image
          src="./images/insta.png"
          alt="logo"
          w="175px"
          h="51px"
          mb="1rem"
        />

        <Text fontSize="1.2rem" fontWeight="600" mb="1rem">
          Sorry, this page isn't available
        </Text>

        <Text
          fontSize="0.9rem"
          w="20rem"
          textAlign="center"
          fontFamily="Roboto"
        >
          The link you followed may be broken, or the page may have been
          removed.
          <Link to="https://www.instagram.com">
            <Text color="rgb(0, 149, 246)">Go back to Instagram</Text>
          </Link>
        </Text>
      </VStack>
    </>
  );
};

export default ThanksForComing;
