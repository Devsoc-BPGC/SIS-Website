import {
  Button,
  Card,
  CardBody,
  Flex,
  Stack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";

const Speaker = () => {
  return (
    <Card
      direction={{ base: "column", md: "row" }}
      m={"1%"}
      p="1%"
      alignItems={"center"}
      justifyContent={"center"}
      style={{textAlign:'justify',textJustify:'inter-word'}}
    >
      <Stack textAlign={"center"} direction={"column"}>
        <Image src={"/Speaker1.png"} width={200} height={200} alt="ict" />
        <Text fontSize={"lg"} fontWeight={"semibold"}>
          Prof. Henry Willis
        </Text>
        <Flex justifyContent={"space-evenly"}>
          <Button colorScheme="linkedin">in</Button>
          <IconButton
            icon={
              <Image
                src="/link_icon.png"
                width={20}
                height={20}
                alt="link_icon"
              />
            }
          />
        </Flex>
      </Stack>
      <CardBody marginLeft={"2%"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis
        vitae et leo duis. Facilisi etiam dignissim diam quis enim lobortis
        scelerisque fermentum dui. In nisl nisi scelerisque eu ultrices vitae
        auctor eu augue. Amet mattis vulputate enim nulla. Vitae turpis massa
        sed elementum tempus egestas sed. Amet massa vitae tortor condimentum
        lacinia quis vel. In eu mi bibendum neque egestas congue quisque. Vitae
        purus faucibus ornare suspendisse sed nisi lacus sed. Quis auctor elit
        sed vulputate mi. Tristique risus nec feugiat in fermentum posuere.
        Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum
        tellus. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
        Ultrices dui sapien eget mi proin sed libero. Aliquam id diam maecenas
        ultricies mi eget. Cras adipiscing enim eu turpis egestas pretium aenean
        pharetra magna. Dapibus ultrices in iaculis nunc sed augue lacus.
      </CardBody>
    </Card>
  );
};

export default function Speakers() {
  return (
    <>
      <Speaker />
      <Speaker />
    </>
  );
}
