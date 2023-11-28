import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Puc from "../HomePage/Puc";
function abssub() {
  return (
    <Flex direction={"column"} minH={"80vh"}>
      <Heading textAlign={"center"} mt={"2%"} color="#211D70">
        Abstract Submission
      </Heading>
      <Text mt={"2%"} padding={'0 2%'}>Abstract submission to start from <span style={{color:'#211D70'}}>December 15, 2023</span></Text>
    </Flex>
  );
}

export default abssub;
