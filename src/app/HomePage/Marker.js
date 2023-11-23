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
        Early bird registration to commence from{" "}
        <Text color="white" display={"inline"}>
          November 27,2023.
        </Text>
        &nbsp;&nbsp;&nbsp;Abstract submission to start from{" "}
        <Text color={"white"} display={"inline"}>
          December 15, 2023.
        </Text>
      </marquee>
    </Box>
  );
}

export default Marker;
