import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Puc from "../HomePage/Puc";
import Link from "next/link";
function abssub() {
  return (
    <Flex
      direction={"column"}
      minH={"80vh"}
      padding={{ base: 0, md: "0 2%" }}
      textAlign={"left"}
      marginBottom={"2%"}
      style={{
        textAlign: "justify",
        textJustify: "inter-word",
      }}
    >
      <Heading textAlign={"center"} mt={"2%"} color="#211D70">
        Abstract Submission
      </Heading>
      <TableContainer
        width={{ base: "100%", md: "80%" }}
        alignSelf={"center"}
        border={"2px"}
        marginTop={"2%"}
      >
        <Table variant="simple" size={{ base: "sm", md: "md" }}>
          <Tbody>
            <Tr border={"2px"}>
              <Td>Abstracts submission start</Td>
              <Td>December 18, 2023</Td>
            </Tr>
            <Tr border={"2px"}>
              <Td>Notification of acceptance</Td>
              <Td>Within 03 weeks</Td>
            </Tr>
            <Tr border={"2px"}>
              <Td>Last date of submission of abstracts</Td>
              <Td>April 15 th 2024</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Text marginTop={"2%"}>
        Scheduled for both oral and poster presentations, the SIS2024 symposium
        invites interested participants to submit their abstract via email to{" "}
        <Link
          style={{ color: "blue", textDecoration: "underline" }}
          href="mailto:abstractsis2024@gmail.com"
        >
          abstractsis2024@gmail.com.
        </Link>
        <br></br>
        Upon acceptance of abstracts, a notification email will be sent to
        participants.<br></br>
        The submitted abstract must not exceed one page and limited to 250
        words. While there is no specific format for submission, the abstract
        must contain:
      </Text>
      <UnorderedList marginTop="0.5%">
        <ListItem>Title</ListItem>
        <ListItem>Nature of presentation: Oral / Poster</ListItem>
        <ListItem>
          Name of authors (including corresponding author / Presenting author)
        </ListItem>
        <ListItem>All author Affiliations</ListItem>
        <ListItem>Contact details</ListItem>
        <ListItem>Keywords (restricted to 6)</ListItem>
      </UnorderedList>
      <Text marginTop={"0.5%"} color={"#211D70"} fontWeight="bold">
        Final consideration of the abstract for presentation in the symposium
        will be subject to registration and payment of symposia fees by
        participants.
        <br></br>
        Symposium registration is now open. To register{" "}
        <Link
          style={{ color: "blue", textDecoration: "underline" }}
          href={"/register"}
        >
          click here
        </Link>
      </Text>
      <Text marginTop={"0.5%"} color={"#211D70"} fontWeight="bold">
        Selected manuscripts post the event will be published in the special
        issue of Journal of Surfactants and Detergents (Wiley) subject to the
        peer review process of the Journal
      </Text>
    </Flex>
  );
}

export default abssub;
