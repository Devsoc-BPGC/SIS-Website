import { Flex, Text } from "@chakra-ui/react";

export default function OrgComm() {
  return (
    <>
      <Flex p="1.5%" justifyContent={"center"} width={"100%"}>
        <Text ml="3rem" fontSize="3rem" fontWeight="800" color="#211D70" fontFamily="Helvetica">
          Organising committee
        </Text>
      </Flex>
      <Flex p="1.5%" direction={"column"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Chief Patrons:
        </Text>
        <Text>Vice-Chancellors (BITS Pilani & ICT)</Text>
      </Flex>
      <Flex p={"1.5%"} direction={"column"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Patron:
        </Text>
        <Text>
          Prof. Suman Kundu<br></br>Director, BITS Pilani K K Birla Goa campus
        </Text>
      </Flex>
      <Flex p="1.5%" direction={"column"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Organisers:
        </Text>
        <Text>
          1. Dr. Kash Mittal<br></br>General Chairman<br></br>
          <br></br>
          2. Prof. Sunil Bhagwat<br></br>ICT, Director IISER Pune Program Committee Chairman<br></br>
          <br></br>
          3. Prof. Srinivas Krishnaswamy<br></br>
          BITS Pilani KK Birla Goa Campus<br></br>
          Local Organising Committee Chairman
        </Text>
      </Flex>
      <Flex p="1.5%" direction={"column"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Scientific Program Committee:
        </Text>
        <Text>
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
    </>
  );
}
