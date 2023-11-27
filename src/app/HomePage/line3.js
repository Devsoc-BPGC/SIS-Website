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
          Dr. Kash Mittal. Two more meetings were held in the USA (Knoxville and
          Potsdam) before the symposium became truly international: Lund (1982),
          Bordeaux (1984), New Delhi (1986), Ottawa (1988), Gainesville (1990),
          Varna (1992), Caracas (1994), Jerusalem (1996), Stockholm (1998),
          Gainesville (2000), Barcelona (2002), Fortaleza (2004), Seoul (2006),
          Berlin (2008), Melbourne (2010), Edmonton (2012), Coimbra (2014),
          Jinan (2016), Norman (2018) and Lublin (2022). These symposia allow
          academicians and scientists from industry to present their work in
          basic aspects of surfactants and interfacial science and also meet
          people and network with their peers working in these all important
          areas. The next edition of the conference will be held at the K. K.
          Birla Goa Campus of Birla Institute of Technology & Science (BITS)
          Pilani. We look forward to hosting you in Goa in June 2024 and to make
          SIS2024 a memorable scientific and cultural experience.
        </Text>
      </Flex>
      <Flex
        alignContent={'center'}
        justifyContent={'center'}
        width="100%"
        height={{base:'500px',md:'auto'}}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11824.23658528305!2d73.87771021059565!3d15.384956447556347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb8375851666d%3A0x4ad5683010110240!2sBITS%20Pilani%20K%20K%20Birla%20Goa%20Campus!5e0!3m2!1sen!2sin!4v1700848154398!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Flex>
    </Flex>
  );
}
