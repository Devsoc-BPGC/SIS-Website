import React from "react";
import { Box, Flex,Text,Link } from "@chakra-ui/react";
import Puc from "../HomePage/Puc";

function page() {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} minH={"80vh"} textAlign={'center'}>
      <Text fontSize={'2xl'} fontWeight={'medium'}>For queries and complaints reach out to us at :
        <br></br><Link href="mailto:sis2024@goa.bits-pilani.ac.in">sis2024@goa.bits-pilani.ac.in</Link>
      </Text>
    </Flex>
  );
}

export default page;
