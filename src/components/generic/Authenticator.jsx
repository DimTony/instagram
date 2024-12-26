/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useUser } from "../../contexts/UserContext";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { OtpInput } from "reactjs-otp-input";
import { Button } from "../ui/button";

const Authenticator = ({ handleAuthValueSubmit }) => {
  const {
    isLoading,
    setIsLoading,
    credentials,
    // sendTo,
    otp,
    setOtp,
    setSendTo,
  } = useUser();

  const sendTo = "jaja@jss.co";

  const handleChange = (otp) => setOtp(otp);

  const isOtpValid = otp.length === 6 && /^\d{6}$/.test(otp);

  if (!sendTo) {
    return null;
  }

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
          <Text fontSize="1.2rem">Enter Security Code</Text>

          <VStack gap="0">
            <Text>Enter the 6-digit code we sent to</Text>
            <Text fontFamily="Outfit" fontWeight="550">
              {sendTo}
            </Text>
          </VStack>

          <Text textAlign="center">
            It may take up to a minute for you to receive this code.
          </Text>

          <OtpInput
            inputStyle={{
              borderBottom: "1px solid #000",
              width: "20px",
              borderRadius: "0",
            }}
            containerStyle="otp-input-container"
            className="otp-input"
            value={otp}
            onChange={handleChange}
            numInputs={6}
          />

          <Button
            mb="0.7rem"
            w="100%"
            bg="rgb(0, 149, 246)"
            h="2rem"
            border="none"
            borderRadius="8px"
            _disabled={{
              opacity: "0.7",
              pointerEvents: "none",
              cursor: "default",
            }}
            onClick={handleAuthValueSubmit}
            disabled={isLoading || !isOtpValid}
          >
            Confirm
          </Button>
        </VStack>
      </Box>

      <VStack display={{ md: "none", base: "flex" }} w="100%">
        <Image src="./images/warn.png" alt="logo" w="97px" h="97px" />

        <Text fontSize="1.2rem">Enter Security Code</Text>

        <VStack gap="0">
          <Text>Enter the 6-digit code we sent to</Text>
          <Text fontFamily="Outfit" fontWeight="550">
            {sendTo}
          </Text>
        </VStack>

        <Text mb="1rem" textAlign="center">
          It may take up to a minute for you to receive this code.
        </Text>

        <OtpInput
          inputStyle={{
            borderBottom: "1px solid #000",
            width: "20px",
            borderRadius: "0",
          }}
          containerStyle="otp-input-container"
          className="otp-input"
          value={otp}
          onChange={handleChange}
          numInputs={6}
        />

        <Button
          mt="2.5rem"
          mb="0.7rem"
          w="100%"
          bg="rgb(0, 149, 246)"
          h="2rem"
          border="none"
          borderRadius="8px"
          _disabled={{
            opacity: "0.7",
            pointerEvents: "none",
            cursor: "default",
          }}
          onClick={handleAuthValueSubmit}
          disabled={isLoading || !isOtpValid}
        >
          Confirm
        </Button>

        {/* <Text>Auth {sendTo}</Text> */}
      </VStack>
    </>
  );
};

export default Authenticator;
