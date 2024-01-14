import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Organisers() {
  return (
    <Flex
      direction={"column"}
      minH={"100vh"}
      p={"2%"}
      style={{
        textAlign: "justify",
        textJustify: "inter-word",
      }}
    >
      <Heading color="#211D70" textAlign={"center"}>
        SIS 2024 ORGANIZERS
      </Heading>
      <Text color="#211D70" fontSize={"xl"} fontWeight={"bold"} mt={"2%"}>
        BIRLA INSTITUTE OF TECHNOLOGY AND SCIENCE (BITS) PILANI (HOST INSTITUTE)
      </Text>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        mt={"1%"}
        alignItems={"center"}
      >
        <Text>
          Birla Institute of Technology &amp; Science, Pilani was declared as an
          Institution Deemed to be a University under section 3 of the UGC Act
          in the year 1964, one of the earliest to be so recognized. BITS Pilani
          has pioneered a number of visionary initiatives in higher education
          and has established an impeccable and formidable reputation nationally
          for excellence. BITS Pilani offers UG, PG and PhD programs to over
          17,000 students across its 5 campuses in Pilani, Goa, Hyderabad,
          Mumbai and Dubai. The Institute has secured over Rs. 398 crores as
          external research funding in the last 05 years. State of art
          facilities have been developed to support cutting edge research, led
          by students and about 930 faculty members, leading to a Scopus h-index
          of 156, with 221 patents filed so far, and 41 patents granted. Birla
          Institute of Technology &amp; Science, Pilani (BITS Pilani) has been
          consistently ranked high, by both government and private ranking
          agencies for its innovative processes and capabilities that have
          enabled it to impart quality education and emerge as the best private
          science and engineering Institute in India. In recognition of the high
          standard that BITS Pilani strives to uphold, the University Grant
          Commission, in 2018, has declared it as an “Institute of Eminence”
          (IOE).
        </Text>
        <Image
          src={"/Bdome.png"}
          height={400}
          width={400}
          quality={100}
          style={{ margin: "1%" }}
        />
      </Flex>
      <Text color="#211D70" fontSize={"xl"} fontWeight={"bold"} mt={"2%"}>
        INSTITUTE OF CHEMICAL TECHNOLOGY (ICT), MUMBAI
      </Text>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        mt={"1%"}
        alignItems={"center"}
      >
        <Text>
          Established on October 1, 1933 as University Department of Chemical
          Technology (popularly called UDCT) of the University of Bombay (now
          Mumbai), with the noble intention of advancing India&#39;s knowledge
          reserves in Chemical Science and Technology, the Institute has grown
          to become a premier (deemed) university devoted to Education,
          Training, Research and Industrial collaboration in Chemical
          Engineering, Chemical Technology, Applied Chemistry, Pharmacy,
          Biotechnology and Bio- Processing. The then UDCT grew in stature over
          the years and was converted in to a Deemed-to-be-University by the
          Ministry of Human Resource Development (MHRD), Govt. of India, on 12
          September 2008. The ICT runs nine undergraduate programmes all
          connected to chemical and allied industries on its main campus along
          with different postgraduate programmes and doctoral programmes.
          Besides the main campus at Matunga, Mumbai, it has additional campuses
          at Jalna, Marathwada and Bhubaneshwar with support from Indian Oil
          Corporation. These campuses have five year integrated Masters’
          programmes with a major and minor degrees in Chemical Engineering and
          Chemical Technology. While maintaining a high publishing record in
          international journals, it maintains close linkages with the industry
          too. (IOE).
        </Text>
        <Image
          src={"/ict-full.jpg"}
          height={400}
          width={400}
          quality={100}
          style={{ margin: "1%" }}
        />
      </Flex>
      <Text color="#211D70" fontSize={"xl"} fontWeight={"bold"} mt={"2%"}>
        INDIAN INSTITUTE OF SCIENCE EDUCATION AND RESEARCH (IISER), PUNE
      </Text>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        mt={"1%"}
        alignItems={"center"}
      >
        <Text>
          The Indian Institute of Science Education and Research (IISER) Pune is
          a premier Institute dedicated to research and teaching in the basic
          sciences. It was established in 2006 by the Ministry of Human Resource
          Development (renamed Ministry of Education in August 2020). In 2012,
          IISER Pune was declared as an Institute of National Importance by an
          Act of Parliament. As a unique initiative in Science education in
          India, IISER aims to be a Science University of the highest caliber
          devoted to both teaching and research in a totally integrated manner,
          with state-of-the-art research and high quality education, thus
          nurturing both curiosity and creativity. IISER Pune runs a 5-year
          integrated Master&#39;s programme, which is the BS-MS programme, and a
          post-Master&#39;s PhD programme, in an intellectually vibrant
          atmosphere of research. Apart from classroom instruction, IISER Pune
          builds student skills in areas such as scientific inquiry, problem
          solving, communication skills, computational sciences, electronics and
          instrumentation and workshop practices. In the advanced teaching and
          research labs of the institute, students have the opportunity to
          pursue experiments as well as advanced research under the mentorship
          of world-class faculty. IISER Pune is dedicated to learn, teach and
          serve society through excellence in education, research and public
          service, to create a learning and working environment based on
          integrity, fairness, dignity and professionalism, to provide equal
          opportunities for all and to develop and encourage a sense of
          environmental responsibility.
        </Text>
        <Image
          src={"/iiser-pune-full.png"}
          height={400}
          width={400}
          quality={100}
          style={{ margin: "1%" }}
        />
      </Flex>
      <Text color="#211D70" fontSize={"xl"} fontWeight={"bold"} mt={"2%"}>
        THE INDIAN SOCIETY FOR SURFACE SCIENCE &amp; TECHNOLOGY
      </Text>
      <Text mt={"1%"}>
        The Society was established in 1983 with the aim to cultivate and
        disseminate the knowledge of surface science among researchers,
        students, teachers and general public. The industry – academia
        collaboration is one of its stated goals because of the importance of
        surface science in general public life. It organizes international,
        national and local seminars throughout the year. It has more than 600
        members from India and abroad. The Society publishes a peer reviewed
        international research journal, Journal of Surface Science and
        Technology as well as a Newsletter. For details of the activities of
        ISSST, please visit website: www.issstindian.org.
      </Text>
      <Text color="#211D70" fontSize={"xl"} fontWeight={"bold"} mt={"2%"}>
        THE SOCIETY FOR INDUSTRIAL CHEMISTRY
      </Text>
      <Text mt={"1%"}>
        The Society for Industrial Chemistry was established with the intention
        to bring together research professionals from industries, academia, and
        entrepreneurs to develop relations and exchange technical knowhow in
        areas of mutual interests and relevance to Indian Industries. This
        society has organized seminars on different topics of relevance to the
        industry. The topics of these seminars vary from polymers and their
        characterization, surfactants and their applications, performance
        chemicals for paint technology, etc. Currently the Society has more than
        125 life members.
      </Text>
    </Flex>
  );
}
