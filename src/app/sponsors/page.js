"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
} from "@chakra-ui/react";
import Puc from "../HomePage/Puc";
function sponsors() {
  return (
    <Flex
      direction={"column"}
      minH={"80vh"}
      mb={"2%"}
      style={{
        textAlign: "justify",
        textJustify: "inter-word",
      }}
    >
      <Heading textAlign={"center"} mt={"2%"} color="#211D70">
        SPONSORSHIP
      </Heading>
      <Text mt={"2%"} padding={"0 2%"}>
        The SIS2024 symposium aims to offer an immersive experience designed to
        inspire, connect, and empower. Scheduled to span five days from June
        16th to June 21st, 2024, the event will be hosted at BITS Pilani K K
        Birla Goa campus and will include the following highlights:
      </Text>
      <Text mt={"2%"} padding={"0 2%"}>
        <u>Inspirational Plenary Lectures:</u> Gain insights from thought
        leaders who are shaping the future of surfactant industry
      </Text>
      <Text mt={"2%"} padding={"0 2%"}>
        <u>Invited talks:</u> Immerse yourself in specialized lectures delivered
        by experts, exploring the latest advancements in and practical
        applications of surfactant chemistry
      </Text>
      <Text mt={"2%"} padding={"0 2%"}>
        <u>Networking Opportunities:</u> Connect with professionals and experts
        from diverse fields
      </Text>
      <Text mt={"2%"} padding={"0 2%"}>
        <u>Exhibition Stalls:</u> Showcase your products and services to a
        targeted audience in a dedicated exhibition space
      </Text>
      <Text mt={"2%"} padding={"0 2%"}>
        <u>Sponsorship Packages:</u> Explore tailored options designed to
        enhance your brand visibility and engagement during the symposium
      </Text>
      <Text
        mt={"2%"}
        padding={"0 2%"}
        color={"#211D70"}
        size={"xl"}
        fontWeight={"bold"}
      >
        UNLEASH UNPRECENTED OPPORTUNITIES
      </Text>
      <UnorderedList padding={"0 2%"} mt={"1%"}>
        <ListItem>
          Be a part of an unparalleled gathering that brings together
          academicians, industry leaders, innovators, and researchers from
          around the world in the all-important area of surfactant science.
        </ListItem>
        <ListItem>
          Seize an exclusive opportunity to align your brand with cutting-edge
          ideas and groundbreaking technologies in the area of surfactant
          science
        </ListItem>
      </UnorderedList>
      <Text
        mt={"2%"}
        padding={"0 2%"}
        color={"#211D70"}
        size={"xl"}
        fontWeight={"bold"}
      >
        ABOUT BITS PILANI
      </Text>
      <Text mt={"1%"} padding={"0 2%"}>
        Birla Institute of Technology &amp; Science, Pilani was declared as an
        Institution Deemed to be a University under section 3 of the UGC Act in
        the year 1964, one of the earliest to be so recognized. BITS Pilani has
        pioneered a number of visionary initiatives in higher education and has
        established an impeccable and formidable reputation nationally for
        excellence. BITS Pilani offers UG, PG and PhD programs to over 17,000
        students across its 5 campuses in Pilani, Goa, Hyderabad, Mumbai and
        Dubai. The Institute has secured over Rs. 398 crores as external
        research funding in the last 05 years. State of art facilities have been
        developed to support cutting edge research, led by students and about
        930 faculty members, leading to a Scopus h-index of 156, with 221
        patents filed so far, and 41 patents granted. Birla Institute of
        Technology &amp; Science, Pilani (BITS Pilani) has been consistently
        ranked high, by both government and private ranking agencies for its
        innovative processes and capabilities that have enabled it to impart
        quality education and emerge as the best private science and engineering
        Institute in India. In recognition of the high standard that BITS Pilani
        strives to uphold, the University Grant Commission, in 2018, has
        declared it as an “Institute of Eminence” (IOE).
      </Text>
      <Text
        mt={"2%"}
        padding={"0 2%"}
        color={"#211D70"}
        size={"xl"}
        fontWeight={"bold"}
      >
        WHY SPONSOR SIS 2024?
      </Text>
      <Text mt={"1%"} padding={"0 2%"}>
        By becoming a sponsor, you not only support the advancement of the
        surfactant industry, but also position your brand at the forefront of
        innovation. <br></br>Here are some key benefits:
      </Text>
      <Text mt={"2%"} padding={"0 2%"}>
        <u>Brand Exposure:</u> Extend your reach to a global audience through
        our extensive marketing channels offered at the symposium
      </Text>
      <Text mt={"2%"} padding={"0 2%"}>
        <u>Networking:</u> Establish valuable connections with industry leaders,
        potential clients, and collaborators
      </Text>
      <Text mt={"2%"} padding={"0 2%"}>
        <u>Thought Leadership:</u> Demonstrate your technical expertise through
        speaking opportunities. Register as a speaker in the symposium
      </Text>
      <Text mt={"2%"} padding={"0 2%"}>
        <u>Visibility:</u> Command attention in the exhibition space and create
        a lasting impression on attendees
      </Text>
      <Text mt={"2%"} padding={"0 2%"}>
        <u>Customized Packages:</u> Tailor your sponsorship to align with your
        specific goals and budget
      </Text>
      <Text
        mt={"2%"}
        padding={"0 2%"}
        color={"#211D70"}
        size={"xl"}
        fontWeight={"bold"}
      >
        JOIN US IN SHAPING THE FUTURE OF SURFACTANT SCIENCE &amp; TECHNOLOGY
      </Text>
      <Text mt={"1%"} padding={"0 2%"}>
        The SIS2024 symposium is a platform where ideas will transform into
        action, and partnerships are forged for lasting success. By sponsoring
        this event, you are not just investing in a symposium; you are investing
        in the future of surfactant industry.
      </Text>
      <Text
        mt={"2%"}
        padding={"0 2%"}
        color={"#211D70"}
        size={"xl"}
        fontWeight={"bold"}
      >
        READY TO AMPLIFY YOUR BRAND AND BE A CATALYST FOR CHANGE?
      </Text>
      <Text mt={"1%"} padding={"0 2%"}>
        Explore our sponsorship packages and secure your place at SIS 2024
      </Text>
      <Text mt={"1%"} padding={"0 2%"}>
        For sponsorship package details and form{" "}
        <Link
          color={"#211D70"}
          onClick={() => {
            const link = document.createElement("a");
            link.download = `sponsorshipformsis2024.pdf`;
            link.href = "/sponsorshipformsis2024.pdf";
            link.click();
          }}
          fontWeight={"bold"}
        >
          CLICK HERE
        </Link>
      </Text>
      <Text mt={"2%"} padding={"0 2%"}>
        For further inquiries and customized sponsorship opportunities, please
        contact
      </Text>
      <Text mt={"1%"} padding={"0 2%"}>
        Prof. Sunil Bhagwat<br></br>Program Committee Chairman<br></br>
        <Link href="mailto:ss.bhagwat@iiserpune.ac.in" color={"#211D70"}>
          ss.bhagwat@iiserpune.ac.in
        </Link>
      </Text>
      <Text mt={"1%"} padding={"0 2%"}>
        Prof. Srinivas Krishnaswamy<br></br>Local Organizing Committee Chairman
        <br></br>
        <Link href="mailto:srinivas@goa.bits-pilani.ac.in" color={"#211D70"}>
          srinivas@goa.bits-pilani.ac.in
        </Link>
      </Text>
      <Text mt={"1%"} padding={"0 2%"}>
        <Link
          href="mailto:chemical.office@goa.bits-pilani.ac.in"
          color={"#211D70"}
        >
          chemical.office@goa.bits-pilani.ac.in
        </Link>
        <br></br>Contact: 0832 2580 130
      </Text>
    </Flex>
  );
}

export default sponsors;
