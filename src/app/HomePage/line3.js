import { Flex, Text } from "@chakra-ui/react";

import Image from "next/image";

export default function Line3() {
  return (
    <Flex direction={{ base: "column", md: "row" }} alignItems={"stretch"}>
      <Flex
        direction={"column"}
        height={"-webkit-fit-content"}
        width={{ base: "100%", md: "690px" }}
        bgColor={"#3F3996"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"white"}
        p={"2%"}
      >
        <Text
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          The “Surfactants in Solution” symposium series was initiated in 1976,
          when it was first held in Albany, New York, under the chairmanship of
          Dr. Kash Mittal. <br />
          Two more meetings were held in the USA (Knoxville and Potsdam) before
          the symposium became truly international: Lund (1982), Bordeaux
          (1984), New Delhi (1986), Ottawa (1988), Gainesville (1990), Varna
          (1992), Caracas (1994), Jerusalem (1996), Stockholm (1998),
          Gainesville (2000), Barcelona (2002), Fortaleza (2004), Seoul (2006),
          Berlin (2008), Melbourne (2010), Edmonton (2012), Coimbra (2014),
          Jinan (2016), Norman (2018) and Lublin (2022). <br />
          These symposia allow academicians and scientists from industry to
          present their work in basic aspects of surfactants and interfacial
          science and also meet people and network with their peers working in
          these all important areas.
          <br /> The next edition of the conference will be held at the K. K.
          Birla Goa Campus of Birla Institute of Technology & Science (BITS)
          Pilani. We look forward to hosting you in Goa in June 2024 and to make
          SIS2024 a memorable scientific and cultural experience.
        </Text>
      </Flex>
      <Flex
        direction={"row"}
        height={"-webkit-fit-content"}
        width={"100%"}
        // alignItems={'strech'}
        justifyContent={"start"}
        // padding={'5%'}
      >
        <Image src="/symposium.png" width={500} height={350} alt="symposium" />
        <Flex
          alignItems={"center"}
          width={"100%"}
          justifyContent={"center"}
          ml={{ base: "2%", md: "0" }}
        >
          <Flex direction={"column"}>
            <Text fontSize={{ base: "xl", md: "2xl" }}>The</Text>
            <Flex alignItems={"end"}>
              <Text
                fontSize={{ base: "6xl", md: "8xl" }}
                fontWeight={"semibold"}
                mt="-2%"
                mb="-2%"
              >
                24
              </Text>
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight={"semibold"}
              >
                th
              </Text>
            </Flex>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              International Symposium
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
