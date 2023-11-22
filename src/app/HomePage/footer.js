import { Flex, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
    borderTop={'10px solid'}
    borderColor={'whiteAlpha.700'}
      direction={'row'}
      width={"100%"}
      justifyContent={"space-around"}
      paddingBottom={"2%"}
      paddingTop={"2%"}
      backgroundColor={'grey'}
      color={'whiteAlpha.700'}
      size={'l'}
    >
      <Flex direction={"column"}>
        <Text size={"2xl"} fontWeight={"bold"} color={'white'}>
          Quick Links
        </Text>
        <Link>About</Link>
        <Link>2024 Conference</Link>
        <Link>Contact</Link>
      </Flex>
      <Flex direction={"column"}>
        <Text size={"2xl"} fontWeight={"bold"} color={'white'}>
          Contact Us
        </Text>
        <Link>email@gmail.com</Link>
        <Text>+91 9876543210</Text>
      </Flex>
    </Flex>
  );
}
