"use client";

import { Flex, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Line2() {
  const eventDate = new Date("2024-06-16");
  const [currentDate, setDate] = useState(new Date());
  const dhms = (date) => {
    const dt = eventDate - date + date.getTimezoneOffset() * 60000;
    var cd = 24 * 60 * 60 * 1000,
      ch = 60 * 60 * 1000,
      days = Math.floor(dt / cd),
      hrs = Math.floor((dt - days * cd) / ch),
      mins = Math.floor((dt - days * cd - hrs * ch) / 60000),
      secs = Math.round((dt - days * cd - hrs * ch - mins * 60000) / 1000),
      pad = (n) => {
        return n < 10 ? "0" + n : n;
      };
    if (secs === 60) {
      mins++;
      secs = 0;
    }
    if (mins === 60) {
      hrs++;
      mins = 0;
    }
    if (hrs === 24) {
      days++;
      hrs = 0;
    }
    return [days, pad(hrs), pad(mins), pad(secs)];
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <Flex direction={{ base: "column", md: "row" }} alignItems={"stretch"} bgColor={"#FAC92E"}>
      <Flex
        direction={"column"}
        height={"-webkit-fit-content"}
        width={{ base: "100%", md: "690px" }}
        bgColor={"white"}
        alignItems={"center"}
        justifyContent={"center"}
        // padding={'1%'}
        color={"#211D70"}
      >
        <Flex alignItems={"start"} width={"100%"} p={"1%"}>
          <Text fontSize={"sm"} color={"#211D70"} align={"center"} fontWeight={"bold"}>
            Jointly organised by:
          </Text>
        </Flex>
        <Flex alignItems={"stretch"} justifyContent={"space-evenly"} width={"100%"} p={"1%"}>
          <Image src="/bpgc.png" width={100} marginTop={2} />
          <Image src="/iser.png" width={45} height={45} />
          <Image src="/ict.png" width={45} height={45} />
        </Flex>
        <Flex bgColor={"#D9D9D9"} marginTop={"2%"} paddingLeft={"5%"} paddingRight={"5%"} paddingTop={"1%"} paddingBottom={"1%"}>
          <Text color={"black"} align={"center"} fontSize={"smaller"}>
            In association with the Society for Industrial Chemistry & the Indian Society for Surface Science and Technology
          </Text>
        </Flex>
      </Flex>
      <Flex
        direction={"row"}
        height={"100%"}
        width={"100%"}
        bgColor={"#FAC92E"}
        alignItems={"center"}
        justifyContent={"center"}
        // padding={'2%'}
        paddingTop={"1.5%"}
      >
        <Flex alignItems={"stretch"} justifyContent={"space-evenly"}>
          <Flex direction={"column"}>
            <Text fontSize={{ base: "3xl", md: "4xl" }} align={"center"}>
              {dhms(currentDate)[0]}
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} align={"center"}>
              Days
            </Text>
          </Flex>
          <Text fontSize={{ base: "5xl", md: "6xl" }} p={"5%"} marginTop={"-5%"}>
            :
          </Text>
          <Flex direction={"column"}>
            <Text fontSize={{ base: "3xl", md: "4xl" }} align={"center"}>
              {dhms(currentDate)[1]}
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} align={"center"}>
              Hours
            </Text>
          </Flex>
          <Text fontSize={{ base: "5xl", md: "6xl" }} p={"5%"} marginTop={"-5%"}>
            :
          </Text>
          <Flex direction={"column"}>
            <Text fontSize={{ base: "3xl", md: "4xl" }} align={"center"}>
              {dhms(currentDate)[2]}
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} align={"center"}>
              Minutes
            </Text>
          </Flex>
          <Text fontSize={{ base: "5xl", md: "6xl" }} p={"5%"} marginTop={"-5%"}>
            :
          </Text>
          <Flex direction={"column"}>
            <Text fontSize={{ base: "3xl", md: "4xl" }} align={"center"}>
              {dhms(currentDate)[3]}
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} align={"center"}>
              Seconds
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
