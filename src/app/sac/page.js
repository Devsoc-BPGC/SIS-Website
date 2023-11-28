import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Puc from "../HomePage/Puc";
function Pac() {
  return (
    <Flex p="1.5%" direction={"column"} mb={"2%"} minH={"80vh"}>
      <Heading mt={"2%"} textAlign={"center"} color="#211D70">
        Scientific Program Committee:
      </Heading>
      <Text
        mt={"2%"}
        style={{
          textAlign: "justify",
          textJustify: "inter-word",
        }}
      >
        1. Prof. Jayesh Bellare<br></br>
        Professor, Department of Chemical Engineering<br></br>
        IIT Bombay<br></br>
        <br></br>
        2. Prof. Jaideep Chatterjee<br></br>
        Professor, Department of Chemical Engineering<br></br>
        BITS Pilani, Hyderabad Campus<br></br>
        <br></br>
        3. Prof. Amiya Panda<br></br>
        Professor, Department of Chemistry<br></br>
        Vidhyasagar University<br></br>
        <br></br>
        4. Dr. Hrishikesh Mirgal<br></br>
        General Manager - Applications<br></br>
        Croda International<br></br>
        <br></br>
        5. Prof. Kallol K. Ghosh<br></br>
        HoD, Chemistry<br></br>
        Pt. Ravishankar Shukla University, Raipur<br></br>
        <br></br>
        6. Dr. Parag Naik<br></br>
        Lead Scientist<br></br>
        ITC Limited, Bengaluru<br></br>
      </Text>
    </Flex>
  );
}

export default Pac;
