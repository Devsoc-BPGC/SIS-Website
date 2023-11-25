import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Marker() {
  return (
    <Box
      backgroundColor="orange"
      m="0"
      fontFamily="Sans"
      fontWeight="bold"
      color=""
      style={{ wordSpacing: "0.1em" }}
    >
      <marquee scrollamount="7">
        Early bird registration 
        <Text color="#211D70" display={"inline"} fontWeight={'bold'}>
        has started.
        </Text>
        &nbsp;&nbsp;&nbsp;Abstract submission to start from{" "}
        <Text color={"#211D70"} display={"inline"} fontWeight={'bold'}>
          December 15, 2023.
        </Text>
      </marquee>
    </Box>
  );
}

export default Marker;
