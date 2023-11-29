import React from "react";
import {
  Flex,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import Puc from "../HomePage/Puc";
function iac() {
  const data = [
    {
      y: 'Prof. Edgar Acosta',
      l: "Canada",
    },
    {
      y: 'Dr. Krassimir D. Danov',
      l: "Bulgaria",
    },
    {
      y: 'Prof. Michael Gradzielski',
      l: "Germany",
    },
    {
      y: 'Prof. Toyoko Imae',
      l: "Japan",
    },
    {
      y: 'Prof. Mihalj Posa',
      l: "Serbia",
    },
    {
      y: 'Dr. Ramon G. Rubio',
      l: "Spain",
    },
    {
      y: 'Dr. Artur Valente',
      l: "Portugal",
    },
    {
      y: 'Prof. Konrad Terpilowski',
      l: "Poland",
    },
    {
      y: 'Prof. Junbai Li',
      l: "China",
    },
  ];
  return (
    <Flex direction={"column"} minH={"80vh"} mb={"2%"}>
      <Heading textAlign={"center"} mt={"2%"} color="#211D70">
      International Advisory Committee
      </Heading>
      <TableContainer padding={"2% 2%"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name of the Member</Th>
              <Th>Country</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d) => {
              return (
                <Tr key={d.y}>
                  <Td>{d.y}</Td>
                  <Td>{d.l}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default iac;
