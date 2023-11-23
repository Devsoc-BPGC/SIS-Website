import { Box, Flex, Stack, Text,ChakraProvider } from "@chakra-ui/react";

import Image from "next/image";

export default function page() {
  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="column" alignItems="center">
      <Box m='10px'>
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
      </Box>
      <Box m='10px'>
      <Flex direction="column" alignItems={"center"}>
        <Box position="relative" width="99vw" height="20vw">
          <Image
            src="/ict-2.png"
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
        About ICT Bombay
      </Text>
      <Text fontSize="1rem" noOfLines={[1, 2, 3]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat
        ac velit ut fringilla. Duis a tellus ac magna feugiat egestas. Curabitur
        posuere justo ligula, et tincidunt lorem scelerisque vitae. Donec eu
        pretium metus, quis tristique augue. Proin nec tincidunt felis. Sed at
        tellus ut sapien vehicula interdum. Suspendisse et ullamcorper nulla, in
        consectetur dolor. Fusce molestie felis in quam tempus, ac ultricies
        augue volutpat. Ut quis gravida diam. Donec dictum hendrerit diam eu
        rhoncus. Proin porttitor est in dui porta vulputate. In tempus nibh
        vitae leo sodales eleifend. Nam tincidunt nulla enim, at fermentum
        libero ultrices quis. Pellentesque pharetra tellus dolor, at facilisis
        lorem consectetur id. Pellentesque aliquam nulla eget dui volutpat
        scelerisque. Maecenas ac eros nisi. Donec ornare tellus eget convallis
        ullamcorper. Proin eleifend faucibus massa, eu fermentum arcu cursus a.
        Morbi vel ullamcorper mi.
        <br />
        <br /> Vivamus elementum rutrum odio ac tristique. Maecenas euismod
        velit purus, ac volutpat magna vulputate sed. Duis a tempor eros. Nunc
        condimentum pellentesque faucibus. Sed tristique risus sed nibh dapibus
        facilisis. Maecenas lobortis cursus sapien in rhoncus. Integer laoreet
        mauris quis elit egestas tincidunt. Vestibulum fringilla leo et euismod
        sollicitudin. Ut viverra lacus eu ligula dictum, vel porttitor dolor
        aliquet. Pellentesque id posuere tellus. Curabitur orci urna, blandit in
        accumsan in, semper et lacus. Curabitur pretium, dui quis facilisis
        imperdiet, tortor erat congue urna, eu iaculis lectus ex id odio. Nam
        lorem tortor, tincidunt quis massa in, dignissim ornare magna. Aenean
        interdum luctus eros, at blandit ante rutrum finibus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Maecenas id luctus quam.
      </Text>
      </Box>
      <Box m='10px'>
      <Flex direction="column" alignItems={"center"}>
        <Box position="relative" width="99vw" height="20vw">
          <Image
            src="/iiser-pune.png"
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
        About IISER Pune
      </Text>
      <Text fontSize="1rem" noOfLines={[1, 2, 3]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat
        ac velit ut fringilla. Duis a tellus ac magna feugiat egestas. Curabitur
        posuere justo ligula, et tincidunt lorem scelerisque vitae. Donec eu
        pretium metus, quis tristique augue. Proin nec tincidunt felis. Sed at
        tellus ut sapien vehicula interdum. Suspendisse et ullamcorper nulla, in
        consectetur dolor. Fusce molestie felis in quam tempus, ac ultricies
        augue volutpat. Ut quis gravida diam. Donec dictum hendrerit diam eu
        rhoncus. Proin porttitor est in dui porta vulputate. In tempus nibh
        vitae leo sodales eleifend. Nam tincidunt nulla enim, at fermentum
        libero ultrices quis. Pellentesque pharetra tellus dolor, at facilisis
        lorem consectetur id. Pellentesque aliquam nulla eget dui volutpat
        scelerisque. Maecenas ac eros nisi. Donec ornare tellus eget convallis
        ullamcorper. Proin eleifend faucibus massa, eu fermentum arcu cursus a.
        Morbi vel ullamcorper mi.
        <br />
        <br /> Vivamus elementum rutrum odio ac tristique. Maecenas euismod
        velit purus, ac volutpat magna vulputate sed. Duis a tempor eros. Nunc
        condimentum pellentesque faucibus. Sed tristique risus sed nibh dapibus
        facilisis. Maecenas lobortis cursus sapien in rhoncus. Integer laoreet
        mauris quis elit egestas tincidunt. Vestibulum fringilla leo et euismod
        sollicitudin. Ut viverra lacus eu ligula dictum, vel porttitor dolor
        aliquet. Pellentesque id posuere tellus. Curabitur orci urna, blandit in
        accumsan in, semper et lacus. Curabitur pretium, dui quis facilisis
        imperdiet, tortor erat congue urna, eu iaculis lectus ex id odio. Nam
        lorem tortor, tincidunt quis massa in, dignissim ornare magna. Aenean
        interdum luctus eros, at blandit ante rutrum finibus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Maecenas id luctus quam.
      </Text>
      </Box>
      </Box>
        </ChakraProvider>
    );
}