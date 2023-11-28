"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Puc from "../HomePage/Puc";
export default function symposiumoverview() {
  return (
    <Flex direction={"column"} minH={"80vh"}>
      <Heading textAlign={"center"} mt={"2%"} color="#211D70">
        Symposium Overview
      </Heading>
      <Text mt={"2%"} padding={"0 2%"}>
        The “Surfactants in Solution” symposium series was initiated in 1976,
        when it was first held in Albany, New York, under the chairmanship of
        Dr. Kash Mittal. Two more meetings were held in the USA (Knoxville and
        Potsdam) before the symposium became truly international: Lund (1982),
        Bordeaux (1984), New Delhi (1986), Ottawa (1988), Gainesville (1990),
        Varna (1992), Caracas (1994), Jerusalem (1996), Stockholm (1998),
        Gainesville (2000), Barcelona (2002), Fortaleza (2004), Seoul (2006),
        Berlin (2008), Melbourne (2010), Edmonton (2012), Coimbra (2014), Jinan
        (2016), Norman (2018) and Lublin (2022). These symposia allow
        academicians and scientists from industry to present their work in basic
        aspects of surfactants and interfacial science and also meet people and
        network with their peers working in these all important areas. The next
        edition of the symposium is scheduled to be held at the K. K. Birla Goa
        Campus of Birla Institute of Technology &amp; Science (BITS) Pilani from
        June 16-21, 2024. We look forward to hosting you in Goa in June 2024 and
        to make SIS2024 a memorable scientific and cultural experience.
      </Text>
    </Flex>
  );
}
