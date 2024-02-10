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
import Image from "next/image";
import Puc from "../HomePage/Puc";

export default function Speakers() {
  const data = [
    { y: "Prof. Edgar Acosta", l: "Canada" },
    { y: "Prof. Ludmila Boinovich", l: "Russia" },
    { y: "Prof. Arun Chattopadhyay", l: "USA" },
    { y: "Prof. Krassimir D. Danov", l: "Bulgaria" },
    { y: "Prof. Shigeru Deguchi", l: "Japan" },
    { y: "Dr. Sepideh Razavi", l: "USA" },
    { y: "Prof. Anniina Salonen", l: "France" },
    { y: "Prof. Maria Sammalkorpi", l: "Finland" },
    { y: "Prof. Subit Kumar Saha", l: "India" },
    { y: "Prof. Wuge Briscoe", l: "UK" },
    { y: "Prof. Boris A Noskov", l: "Russia" },
    { y: "Prof. Amiya Kumar Panda", l: "India" },
    { y: "Prof. Kallol K. Ghosh", l: "India" },
    { y: "Prof. Jaideep Chatterjee", l: "India" },
    { y: "Prof. Jun-ichi Kadokawa", l: "Japan" },
    { y: "Dr. Hrushikesh Mirgal", l: "India" },
    { y: "Prof. Chien-Hsiang Chang", l: "Taiwan" },
    { y: "Prof. Hideki Sakai", l: "Japan" },
    { y: "Prof. P. A. Hassan", l: "India" },
    { y: "Prof. Brij Moudgil", l: "USA" },
    { y: "Prof. Ramon G. Rubio", l: "Spain" },
    { y: "Prof. Jingcheng Hao", l: "China" },
    { y: "Prof. Saad Khan", l: "US" },
    { y: "Prof. Calum J. Drummond", l: "Australia" },
    { y: "Prof. Abhijit Dan", l: "India" },
    { y: "Prof. Santanu Bhattacharya", l: "India" },
    { y: "Toyoko Imae", l: "Taiwan" },
    { y: "Dr. Samiran Mahapatra", l: "India" },
    { y: "Dr. Polina Prokopovich", l: "UK" },
    { y: "Prof. Yukishige Kondo", l: "Japan" },
    { y: "Prof. Partha Hazra", l: "India" },
    { y: "Dr. S Sandanaraj Britto", l: "India" },
  ];
  return (
    <Flex direction={"column"} minH={"80vh"} mb={"2%"}>
      <Heading textAlign={"center"} mt={"2%"} color="#211D70">
        List of Confirmed Speakers
      </Heading>
      <TableContainer padding={"2% 2%"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name of Speaker</Th>
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
