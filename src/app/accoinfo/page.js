import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import Puc from "../HomePage/Puc";
import Image from "next/image";
import Link from "next/link";
function accoinfo() {
  return (
    <Flex minH={"100vh"} direction={"column"} p={"1%"}>
      <Heading textAlign={"center"} mt={"2%"} color="#211D70">
        Staying In Goa
      </Heading>
      <Box mt={"2%"}>
        <Image
          src={"/aco1.png"}
          height={450}
          width={300}
          quality={100}
          style={{ float: "left", margin: "1%" }}
        />
        <Text>
          Embarking on the intellectual journey to BITS Pilani K K Birla Goa
          Campus for the SIS2024 Symposium, participants are invited to discover
          the perfect balance of scholarly pursuits and coastal serenity in the
          vibrant state of Goa. The accommodation landscape in this tropical
          haven caters to the diverse needs of symposium attendees, providing a
          seamless fusion of comfort and convenience. From beachfront resorts
          offering panoramic ocean views to cozy boutique hotels exuding charm,
          Goa&#39;s lodging options promise an immersive experience.
          <Image
            src={"/aco2.png"}
            height={450}
            width={300}
            quality={100}
            style={{ float: "right", margin: "1%" }}
          />
          <Text>
            As you prepare to delve into the realms of science, innovation, and
            society at the SIS2024 symposium, your choice of accommodation in
            Goa becomes a pivotal element, ensuring a rejuvenating retreat after
            engaging in cutting-edge discussions and thought- provoking sessions
            at BITS Pilani&#39;s distinguished Goa Campus.
            <br />
            Participants attending the symposium in Goa will need to make
            accommodation arrangements on their own. Kindly note the organizers
            will not assume responsibility for any accommodation bookings.
            Travel and accommodation to and from Goa can be arranged through
            various booking portals (based entirely on participant choice).
            Alternately, one can get in touch with Takara Tours, India (see
            information below) for assistance.
          </Text>
        </Text>
      </Box>
      <Text fontSize={"2xl"} mt={"1%"} fontWeight={"bold"} color="#211D70">
        Takara Tours
      </Text>
      <Text>
        Takara Tours is a full-service travel agency based in Goa that
        specializes in both domestic and international travel. Their range of
        services include:
      </Text>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <OrderedList>
          <ListItem>Visa assistance</ListItem>
          <ListItem>International and domestic flight bookings</ListItem>
          <ListItem>Train ticket bookings</ListItem>
          <ListItem>Bus ticket bookings</ListItem>
          <ListItem>Travel insurance</ListItem>
          <ListItem>Hotels/Airbnb bookings</ListItem>
          <ListItem>Car rentals</ListItem>
          <ListItem>Airport and Train station transfers bookings</ListItem>
        </OrderedList>
        <Image
          src={"/aco3.png"}
          height={450}
          width={300}
          quality={100}
          style={{ margin: "1%" }}
        />
      </Flex>
      <Text>
        Please use the subject line &quot;SIS 2024 Symposium&quot; for any of
        the above listed requests for the symposium. All reservations will be
        done with promotional/discounted fare for guests attending the
        conference (as per the agency norms).
      </Text>
      <Text mt={"1%"}>
        All queries can be directed to the following contact:
        <br />
        Naganandhini V<br />
        Takara Tours
        <br />
        Contact number:{" "}
        <Link href={"tel:9022305750"} style={{ textDecoration: "underline" }}>
          +91-9022305750
        </Link>
        <br />
        Email:{" "}
        <Link
          href={"mailto:hello@takaratours.com"}
          style={{ textDecoration: "underline" }}
        >
          hello@takaratours.com
        </Link>
        <br />
        Website:{" "}
        <Link
          href={"https://www.takaratours.com/"}
          style={{ textDecoration: "underline" }}
        >
          https://www.takaratours.com/
        </Link>
      </Text>
      <Text mt={"1%"}>
        <Link
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          href={'/hotels.pdf'}
        >
          Click here
        </Link>{" "}
        to see the list of important hotels in Goa which can be booked through
        Takara Tours. Please note, this list is not exhaustive.
      </Text>
      <Text mt={"1%"} color="#211D70" fontWeight={'bold'}>
        This agency is not associated with the Symposium and is an independent
        entity. Participants are free to make their travel and accommodation
        through any other agency as appropriate.
      </Text>
    </Flex>
  );
}

export default accoinfo;
