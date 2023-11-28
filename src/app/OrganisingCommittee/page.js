import { Flex, Text } from "@chakra-ui/react";

export default function OrgComm() {
  return (
    <Flex direction={"column"} mb={"2%"} minH={"80vh"}>
      <Flex p="1.5%" justifyContent={"center"} width={"100%"}>
        <Text
          ml="3rem"
          fontSize="3rem"
          fontWeight="800"
          color="#211D70"
          fontFamily="Helvetica"
        >
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
        <Text
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          1. Dr. Kash Mittal<br></br>General Chairman<br></br>
          <br></br>
          2. Prof. Sunil Bhagwat,{"\t"}Director IISER Pune<br></br>
          Committee Chairman<br></br>
          <br></br>
          3. Prof. Srinivas Krishnaswamy,{"\t"} BITS Pilani KK Birla Goa Campus
          <br></br>
          Local Organising Committee Chairman
          <br></br>
          <br></br>
          4. Department of Chemical Engineering<br></br>Local Organizing
          Committee
        </Text>
      </Flex>
    </Flex>
  );
}
