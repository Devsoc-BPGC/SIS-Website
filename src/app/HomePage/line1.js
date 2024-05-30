import { Flex, Slide, Text, Heading } from "@chakra-ui/react";

import Image from "next/image";
import Carousel from "./carousel";
import Head from "next/head";
export default function Line1() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems={"stretch"}
      bgColor={"#6AD4D7"}
    >
      <Carousel />
      {/* <Image src="/Bdome.png" width={700} height={700} alt={"bdome"} /> */}
      <Flex
        direction={"column"}
        height={"-moz-max-content"}
        width={"100%"}
        bgColor={"#6AD4D7"}
        alignItems={"center"}
        justifyContent={"center"}
        // padding={'5%'}
      >
        <Flex
          marginBottom={{ base: "1rem", md: "2rem" }}
          color={"#211D70"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex direction={"column"} marginRight={{ base: 0, md: "1rem" }}>
            <Text fontSize={"6xl"} align={"center"}>
              16-21
            </Text>
            <Text fontSize={"4xl"} align={"center"}>
              June 2024
            </Text>
          </Flex>
          <Text
            height={{ base: "2px", md: "100%" }}
            width={{ base: "100%", md: "2px" }}
            bgColor={"#211D70"}
          ></Text>
          <Flex
            direction={"column"}
            marginLeft={{ base: "0", md: "1rem" }}
            fontSize={"5xl"}
            fontWeight={"extrabold"}
            justifyContent={"center"}
          >
            <Text fontSize={"xl"} color={"orange.500"} marginTop={"2%"}>
              24th International Symposium
            </Text>
            <Text align={"left"}>Surfactants in Solution</Text>
            <Text color={"#ED1C24"} align={"left"}>
              India
            </Text>
          </Flex>
        </Flex>
        <Text fontFamily={"sans-serif"} color={"black"} fontSize={"xl"}>
          Birla Institute Of Technology & Science Pilani, K.K. Birla Goa Campus
        </Text>
        <Flex direction={'column'} height={'18%'} mt={'1%'} width={{base:'100%',md:'80%'}} textAlign={'center'} borderTop={'2px solid #211D70'}>
          <Text>Sponsored by : </Text>
          <Flex mt={'1%'} direction={'row'} alignItems={'center'} justifyContent={'center'}>
            <Image src="/kruss.jpg" width={50} height={50} alt={"kruss"} style={{marginLeft:'2%'}} />
            <Image src="/kv.jpg" width={50} height={50} alt={"kv"} style={{marginLeft:'2%'}}/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
