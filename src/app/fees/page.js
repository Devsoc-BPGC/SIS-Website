import React from "react";
import {
  Td,
  Tbody,
  Th,
  Tr,
  Thead,
  Box,
  ChakraProvider,
  Table,
  TableContainer,
  Text,
  TableCaption,
  Flex,
} from "@chakra-ui/react";

function page() {
  return (
    <ChakraProvider>
      <Flex direction="column" alignItems="center" mb={"2%"}>
        <Text
          fontSize="2rem"
          fontWeight="800"
          color="#211D70"
          fontFamily="Helvetica"
          align={"center"}
        >
          Fee Structure
        </Text>
        <Text
          fontSize="15px"
          fontWeight="700"
          mt={"1%"}
          mb={"1%"}
          align={"left"}
        >
          The Symposium registration commences from 4th December 2023.
          <br></br>
          Early Bird registration closes 15th February 2024.
          <br></br>
          Registration Fees Structure (valid until 15th February 2024)
        </Text>
        <TableContainer>
          <Table variant="simple">
            <TableCaption fontSize="1rem" fontWeight="600">
              * Delegates / Students working or studying in Universities,
              Research centers or Industry not located or based in India
              <br></br>
              ** Delegates / Students working or studying in Universities,
              Research centers or Industry located or based in India
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Category</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>International* Delegates (Academic / Industry)</Td>
                <Td>$450</Td>
              </Tr>
              <Tr>
                <Td>International* Students</Td>
                <Td>$200</Td>
              </Tr>
              <Tr>
                <Td>Academic Delegates (From India**)</Td>
                <Td>₹7,000</Td>
              </Tr>
              <Tr>
                <Td>Students (From India**)</Td>
                <Td>₹3,500</Td>
              </Tr>
              <Tr>
                <Td>Industry Delegates (From India**)</Td>
                <Td>₹10,000</Td>
              </Tr>
              <Tr>
                <Td>Accompanying guest (International*)</Td>
                <Td>$100</Td>
              </Tr>
              <Tr>
                <Td>Accompanying guest (From India**)</Td>
                <Td>₹2,000</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <br></br>
        <Text
          fontSize={"md"}
          fontWeight="600"
          paddingLeft={"2%"}
          paddingRight={"2%"}
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          Fees for participants include Symposium proceedings, Symposium kit,
          lunch, Gala dinner and excursion. The accompanying Guest fee includes
          everything apart from the Symposium proceedings and the Symposium kit.
          Please note the fees do not include accommodation for invited
          speakers, participants or accompanying guests. Accommodation related
          information will be available separately on the SIS2024 webpage.
          <br></br>
        </Text>
        <Text
          paddingLeft={"2%"}
          paddingRight={"2%"}
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          <br></br>
          Registration will be complete once payment has been received into the
          Symposium account. National delegates and students will need to pay
          the registration fee via the SBI collect portal.
          <b>
            <br></br>
            <br></br>
            International participants will need to pay the registration fee
            using net banking, details for which are given below:-
            <br></br>
            Name - BITS Pilani K K Birla Goa Campus
            <br></br>
            Bank - State Bank of India
            <br></br>
            Branch - BITS Pilani Goa Centre
            <br></br>
            Account no. 30803684122
            <br></br>
            IFSC code - SBIN0010720
            <br></br>
            SWIFT Code - SBININBB229
            <br></br>
          </b>
        </Text>
      </Flex>
    </ChakraProvider>
  );
}

export default page;
