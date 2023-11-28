"use client";
import Puc from "../HomePage/Puc";
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
import React from "react";
export default function symposiumhistory() {
  const data = [
    {
      y: 1976,
      l: "Albany, NY, USA",
    },
    {
      y: 1978,
      l: "Knoxville, TN, USA",
    },
    {
      y: 1980,
      l: "Potsdam,NY, USA",
    },
    {
      y: 1982,
      l: "Lund, Sweden",
    },
    {
      y: 1984,
      l: "Bordeaux, France",
    },
    {
      y: 1986,
      l: "New Delhi, India",
    },
    {
      y: 1988,
      l: "Ottawa, Canada",
    },
    {
      y: 1992,
      l: "Varna, Bulgaria",
    },
    {
      y: 1994,
      l: "Caracas, Venezuela",
    },
    {
      y: 1996,
      l: "Jerusalem, Israel",
    },
    {
      y: 1998,
      l: "Stockholm, Sweden",
    },
    {
      y: 2000,
      l: "Gainesville, FL, USA",
    },
    {
      y: 2002,
      l: "Barcelona, Spain",
    },
    {
      y: 2004,
      l: "Fortaleza, Brazil",
    },
    {
      y: 2006,
      l: "Seoul, Korea",
    },
    {
      y: 2008,
      l: "Berlin, Germany",
    },
    {
      y: 2010,
      l: "Melbourne, Australia",
    },
    {
      y: 2012,
      l: "Edmonton, Canada",
    },
    {
      y: 2014,
      l: "Coimbra, Portugal",
    },
    {
      y: 2016,
      l: "Jinan, China",
    },
    {
      y: 2018,
      l: "Norman, OK, USA",
    },
    {
      y: 2020,
      l: "No meeting",
    },
    {
      y: 2022,
      l: "Lublin, Poland",
    },
  ];
  return (
    <Flex direction={"column"} minH={"80vh"} mb={'2%'}>
      <Heading textAlign={"center"} mt={"2%"} color="#211D70">
        Symposium History
      </Heading>
      <TableContainer padding={"2% 2%"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Year</Th>
              <Th>Location</Th>
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
