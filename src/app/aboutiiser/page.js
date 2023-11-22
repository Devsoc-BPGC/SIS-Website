import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import Image from "next/image";

export default function page() {
  return (
    <>
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
    </>
  );
}
