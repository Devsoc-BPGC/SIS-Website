import React from "react";
import {
  Box,
  ChakraProvider,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

function page() {
  return (
    <ChakraProvider>
      <Flex direction={"column"} alignItems="center" minH="80vh" mb={"2%"}>
        <Text
          fontSize={"4xl"}
          fontWeight="600"
          color="#211D70"
          fontFamily="Helvetica"
          align={"center"}
        >
          SIS 2024 Overview
        </Text>
        <Box paddingLeft={"2%"} mt={"2%"}>
          <Text
            fontSize={"md"}
            fontWeight="500"
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            <b style={{ fontSize: "1rem" }}>
              The 24th International Symposium on Surfactants in solution” will
              be held at BITS Pilani K K Birla Goa Campus from June 16-21, 2024.
              This Symposium is jointly organized by BITS Pilani K K Birla Goa
              Campus, IISER Pune and ICT Mumbai, in association with Society for
              Industrial Chemistry & Indian Society for Surface Science and
              Technology.
            </b>
            <br></br>
            <br></br>
            Scope of the Symposium
            <br></br>
            <br></br>
            <UnorderedList>
              <ListItem>
                Thermodynamics, modelling, simulation and theory of
                surfactants-based systems
              </ListItem>
              <ListItem>
                Surfactants adsorption at interfaces and pseudo-phase formation
              </ListItem>
              <ListItem>
                Mixed surfactant systems, surfactants in separation processes{" "}
              </ListItem>
              <ListItem>Kinetics of surfactant-based systems </ListItem>
              <ListItem>
                Bio derived, bioinspired and Gemini surfactants, sustainability
                in surfactants
              </ListItem>
              <ListItem>Polymeric and polymerizable surfactants </ListItem>
              <ListItem>Surfactants in applications </ListItem>
              <ListItem>
                Surfactants wetting, spreading and capillary phenomena{" "}
              </ListItem>
              <ListItem>Monolayers and Langmuir-Blodgett films</ListItem>
              <ListItem>
                Surfactants – experimental methods, techniques and approaches{" "}
              </ListItem>
              <ListItem>Surfactants in tribology </ListItem>
              <ListItem>Adsorption layer dynamics at interfaces </ListItem>
              <ListItem>General/other topics </ListItem>
              <ListItem>Young Scientist Forum</ListItem>
            </UnorderedList>
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default page;
