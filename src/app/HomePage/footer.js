import { Flex, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      borderTop={"10px solid"}
      borderColor={"whiteAlpha.700"}
      direction={'column'}
      width={"100%"}
      justifyContent={"space-around"}
      alignItems={{ base: "flex-start", md: "center" }}
      paddingBottom={"2%"}
      paddingTop={"2%"}
      paddingLeft={"2%"}
      backgroundColor={"grey"}
      color={"whiteAlpha.700"}
      size={"l"}
    >
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        width={"100%"}
        justifyContent={"space-around"}
        alignItems={{ base: "flex-start", md: "center" }}
        backgroundColor={"grey"}
        color={"whiteAlpha.700"}
        size={"l"}
      >
        <Flex direction={"column"}>
          <Text size={"2xl"} fontWeight={"bold"} color={"white"}>
            Copyright © 2023 Surfactants in Solution
          </Text>
        </Flex>
        <Flex direction={"column"}>
          <Text size={"2xl"} fontWeight={"bold"} color={"white"}>
            Contact Us
          </Text>
          <Link href="mailto:sis2024@goa.bits-pilani.ac.in">
            sis2024@goa.bits-pilani.ac.in
          </Link>
        </Flex>
      </Flex>
      <Text>Made with ❤️ by <Link href="https://devsoc.club" color={'blue.100'}>Devsoc</Link></Text>
    </Flex>
  );
}
