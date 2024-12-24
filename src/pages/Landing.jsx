import {
  Box,
  HStack,
  Image,
  Input,
  Separator,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Box display={{ md: "flex", base: "none" }} w="100vw" h="100vh" bg="#fff">
        <Stack
          w="100%"
          h="100%"
          pt="36px"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack>
            <Box
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
                    h="36px"
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
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    h="36px"
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
                  />
                </VStack>

                <Button
                  mb="0.7rem"
                  w="100%"
                  bg="rgb(0, 149, 246)"
                  h="2rem"
                  border="none"
                  borderRadius="8px"
                  _disabled={{
                    opacity: "0.7",
                    pointerEvent: "none",
                    cursor: "default",
                  }}
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

            <VStack>
              <Text mb="0.6rem">Get the app</Text>
              <HStack alignItems="center">
                <Link to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D38290087-6769-4CC8-B0EB-A7D8BABF7BA3%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
                  <Image
                    src="./images/gp.png"
                    alt="google"
                    w="134.28px"
                    h="40px"
                  />
                </Link>
                <Link to="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1600%2C860">
                  <Image
                    src="./images/ms.png"
                    alt="google"
                    w="134.28px"
                    h="40px"
                  />
                </Link>
              </HStack>
            </VStack>
          </VStack>

          <VStack mb="1rem" fontSize="12px">
            <HStack alignItems="center" gap="1rem">
              <Link to="https://about.meta.com/">
                <Text>Meta</Text>
              </Link>
              <Link to="https://about.instagram.com/">
                <Text>About</Text>
              </Link>
              <Link to="https://about.instagram.com/blog/">
                <Text>Blog</Text>
              </Link>
              <Link to="https://about.instagram.com/about-us/careers">
                <Text>Jobs</Text>
              </Link>
              <Link to="https://help.instagram.com/">
                <Text>Help</Text>
              </Link>
              <Link to="https://developers.facebook.com/docs/instagram">
                <Text>API</Text>
              </Link>
              <Link to="https://www.instagram.com/legal/privacy/">
                <Text>Privacy</Text>
              </Link>
              <Link to="https://www.instagram.com/legal/terms/">
                <Text>Terms</Text>
              </Link>
              <Link to="https://www.instagram.com/explore/locations/">
                <Text>Locations</Text>
              </Link>
              <Link to="https://www.instagram.com/web/lite/">
                <Text>Instagram Lite</Text>
              </Link>
              <Link to="https://www.threads.net/">
                <Text>Threads</Text>
              </Link>
              <Link to="https://www.facebook.com/help/instagram/261704639352628">
                <Text>Contact Uploading & Non-Users</Text>
              </Link>
              <Link to="https://www.instagram.com/accounts/meta_verified/?entrypoint=web_footer">
                <Text>Meta Verified</Text>
              </Link>
            </HStack>
            <Text>© 2024 Instagram from Meta</Text>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Landing;
