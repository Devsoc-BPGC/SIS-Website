import { Box, Flex, Stack, Text, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Flex direction="column" alignItems={"center"}>
        <Box position="relative" width="99vw" height="20vw">
          <Image
            src="/bits_all.png"
            // width={1440}
            quality={100}
            // height={200}
            // sizes="90vw"
            fill
            alt="ict"
            // alignItems={"center"}
          />
        </Box>
      </Flex>
      <Text
        fontSize={["2rem", "2rem", "2.5rem"]}
        as="bold"
        fontWeight="bold"
        // noOfLines={[1, 2, 3]}
        // align="center"
      >
        About BITS
      </Text>
      <Text marginBottom={["2rem", 0]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
        fringilla lorem. Aliquam ut turpis eu libero luctus rutrum a sed nunc.
        Pellentesque fringilla aliquam ipsum, nec varius nisl facilisis vitae.
        Praesent imperdiet turpis non odio feugiat, at gravida sapien mattis.
        Pellentesque at sapien mauris. Nunc iaculis turpis vel sem lacinia
        luctus dapibus sit amet erat. Morbi vel ipsum posuere, elementum erat
        dapibus, egestas mauris. Proin ultricies, sem sed dapibus euismod, ante
        libero laoreet quam, a imperdiet est nunc eu ligula. Fusce iaculis
        lacinia placerat. Pellentesque dapibus ipsum eros, ut interdum nunc
        imperdiet quis. Nullam tempor molestie dolor, eu bibendum nisl mollis
        rhoncus. Sed velit odio, sagittis sed tristique ut, auctor sit amet
        tellus. Sed eleifend pellentesque neque nec ultrices. Nullam molestie
        risus eu leo rhoncus vulputate. Aliquam in commodo ante, nec lacinia
        diam. Donec ut odio imperdiet, ultricies quam vel, tempus metus.
        Maecenas eu tempor urna. Donec sagittis tempus egestas. Integer bibendum
        sapien dui, et mattis tortor blandit quis. Aenean semper, nisl eget
        vestibulum gravida, nisl orci luctus diam, sed sodales lacus sem a nisl.
        Praesent convallis, ipsum sit amet cursus tristique, sapien enim rhoncus
        odio, ut egestas dolor erat at diam. Ut nec erat accumsan, tempor tortor
        eget, vulputate diam. Sed venenatis leo quis eros rutrum, in placerat
        tellus tempus. Donec nec dapibus elit. Vestibulum a tortor ac urna
        condimentum varius id et libero. Vestibulum ante ipsum primis in
      </Text>
      <Box bgColor="#76C2E5">
        <Flex direction={["column", "row"]}>
          <Box
            position="relative"
            width={["100%", "50%"]}
            height={["78.3vw", "39.2vw"]}
            // marginBottom={["2rem", 0]}
            // display={{ base: "none", md: "block" }}
            // mr={[0, "2rem"]}
          >
            <Image src="/bppc.png" quality={100} fill alt="bppc" />
          </Box>
          <Box
            position="relative"
            width={["100%", "50%"]}
            // height={["78.3vw", "39.2vw"]}
            paddingLeft={[0, "1rem"]}
            paddingRight={[0, "0.7rem"]}
            // marginBottom={["2rem", 0]}
          >
            <Text
              fontSize={["2rem", "2rem", "2.5rem"]}
              as="bold"
              fontWeight="bold"
              // noOfLines={[1, 2, 3]}
              // align="center"
            >
              BITS Pilani
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              quis fringilla lorem. Aliquam ut turpis eu libero luctus rutrum a
              sed nunc. Pellentesque fringilla aliquam ipsum, nec varius nisl
              facilisis vitae. Praesent imperdiet turpis non odio feugiat, at
              gravida sapien mattis. Pellentesque at sapien mauris. Nunc iaculis
              turpis vel sem lacinia luctus dapibus sit amet erat. Morbi vel
              ipsum posuere, elementum erat dapibus, egestas mauris. Proin
              ultricies, sem sed dapibus euismod, ante libero laoreet quam, a
              imperdiet est nunc eu ligula. Fusce iaculis lacinia placerat.
              Pellentesque dapibus ipsum eros, ut interdum nunc imperdiet quis.
              Nullam tempor molestie dolor, eu bibendum nisl mollis rhoncus. Sed
              velit odio, sagittis sed tristique ut, auctor sit amet tellus. Sed
              eleifend pellentesque neque nec ultrices.
            </Text>
          </Box>
        </Flex>
        <Flex direction={["column", "row"]}>
          <Box
            position="relative"
            width={["100%", "50%"]}
            height={["78.3vw", "39.2vw"]}
            // marginBottom={["2rem", 0]}
            display={{ base: "block", md: "none" }}
          >
            <Image src="/bpgc_1.png" quality={100} fill alt="ict" />
          </Box>
          <Box
            position="relative"
            width={["100%", "50%"]}
            // height={["78.3vw", "39.2vw"]}
            paddingRight={[0, "1rem"]}
            paddingLeft={[0, "0.7rem"]}
            // marginBottom={["10rem", 0]}
          >
            <Text
              fontSize={["2rem", "2rem", "2.5rem"]}
              as="bold"
              fontWeight="bold"
              // noOfLines={[1, 2, 3]}
              // align="center"
            >
              BITS Pilani KK Birla Goa Campus
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              quis fringilla lorem. Aliquam ut turpis eu libero luctus rutrum a
              sed nunc. Pellentesque fringilla aliquam ipsum, nec varius nisl
              facilisis vitae. Praesent imperdiet turpis non odio feugiat, at
              gravida sapien mattis. Pellentesque at sapien mauris. Nunc iaculis
              turpis vel sem lacinia luctus dapibus sit amet erat. Morbi vel
              ipsum posuere, elementum erat dapibus, egestas mauris. Proin
              ultricies, sem sed dapibus euismod, ante libero laoreet quam, a
              imperdiet est nunc eu ligula. Fusce iaculis lacinia placerat.
              Pellentesque dapibus ipsum eros, ut interdum nunc imperdiet quis.
              Nullam tempor molestie dolor, eu bibendum nisl mollis rhoncus. Sed
              velit odio, sagittis sed tristique ut, auctor sit amet tellus. Sed
              eleifend pellentesque neque nec ultrices.
            </Text>
          </Box>
          <Box
            position="relative"
            width={["100%", "50%"]}
            height={["78.3vw", "39.2vw"]}
            // marginBottom={["2rem", 0]}
            display={{ base: "none", md: "block" }}
          >
            <Image src="/bpgc_1.png" quality={100} fill alt="ict" />
          </Box>
        </Flex>
        <Flex direction={["column", "row"]}>
          <Box
            position="relative"
            width={["100%", "50%"]}
            height={["78.3vw", "39.2vw"]}
          >
            <Image src="/bphc.png" quality={100} fill alt="ict" />
          </Box>
          <Box
            position="relative"
            width={["100%", "50%"]}
            // height={["78.3vw", "39.2vw"]}
            paddingLeft={[0, "1rem"]}
            paddingRight={[0, "0.7rem"]}
          >
            <Text
              fontSize={["2rem", "2rem", "2.5rem"]}
              as="bold"
              fontWeight="bold"
              // noOfLines={[1, 2, 3]}
              // align="center"
            >
              BITS Pilani Hyderabad Campus
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              quis fringilla lorem. Aliquam ut turpis eu libero luctus rutrum a
              sed nunc. Pellentesque fringilla aliquam ipsum, nec varius nisl
              facilisis vitae. Praesent imperdiet turpis non odio feugiat, at
              gravida sapien mattis. Pellentesque at sapien mauris. Nunc iaculis
              turpis vel sem lacinia luctus dapibus sit amet erat. Morbi vel
              ipsum posuere, elementum erat dapibus, egestas mauris. Proin
              ultricies, sem sed dapibus euismod, ante libero laoreet quam, a
              imperdiet est nunc eu ligula. Fusce iaculis lacinia placerat.
              Pellentesque dapibus ipsum eros, ut interdum nunc imperdiet quis.
              Nullam tempor molestie dolor, eu bibendum nisl mollis rhoncus. Sed
              velit odio, sagittis sed tristique ut, auctor sit amet tellus. Sed
              eleifend pellentesque neque nec ultrices.
            </Text>
          </Box>
        </Flex>
        <Flex direction={["column", "row"]}>
          <Box
            position="relative"
            width={["100%", "50%"]}
            height={["78.3vw", "39.2vw"]}
            display={{ base: "block", md: "none" }}
          >
            <Image src="/bpdc.png" quality={100} fill alt="ict" />
          </Box>
          <Box
            position="relative"
            width={["100%", "50%"]}
            // height={["78.3vw", "39.2vw"]}
            paddingRight={[0, "1rem"]}
            paddingLeft={[0, "0.7rem"]}
          >
            <Text
              fontSize={["2rem", "2rem", "2.5rem"]}
              as="bold"
              fontWeight="bold"
              // noOfLines={[1, 2, 3]}
              // align="center"
            >
              BITS Pilani Dubai Campus
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              quis fringilla lorem. Aliquam ut turpis eu libero luctus rutrum a
              sed nunc. Pellentesque fringilla aliquam ipsum, nec varius nisl
              facilisis vitae. Praesent imperdiet turpis non odio feugiat, at
              gravida sapien mattis. Pellentesque at sapien mauris. Nunc iaculis
              turpis vel sem lacinia luctus dapibus sit amet erat. Morbi vel
              ipsum posuere, elementum erat dapibus, egestas mauris. Proin
              ultricies, sem sed dapibus euismod, ante libero laoreet quam, a
              imperdiet est nunc eu ligula. Fusce iaculis lacinia placerat.
              Pellentesque dapibus ipsum eros, ut interdum nunc imperdiet quis.
              Nullam tempor molestie dolor, eu bibendum nisl mollis rhoncus. Sed
              velit odio, sagittis sed tristique ut, auctor sit amet tellus. Sed
              eleifend pellentesque neque nec ultrices.
            </Text>
          </Box>
          <Box
            position="relative"
            width={["100%", "50%"]}
            height={["78.3vw", "39.2vw"]}
            display={{ base: "none", md: "block" }}
          >
            <Image src="/bpdc.png" quality={100} fill alt="ict" />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
