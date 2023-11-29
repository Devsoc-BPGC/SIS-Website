"use client";
import { Box, Image, Text, ChakraProvider, Flex } from "@chakra-ui/react";
export default function AboutIndia() {
  var imgHeight = "7rem";
  const images = [2, 3, 4, 5, 6, 7, 8, 9];
  const images2 = [1, 2, 3, 4, 5, 6, 7];
  return (
    <ChakraProvider>
      <Flex direction={"column"} alignItems="center" mb={"2%"}>
        <Flex direction={"row"} justifyContent="center">
          {images.map((i) => {
            return (
              <Box height={imgHeight} key={i}>
                <Image
                  src={`/images/india/img${i}.jpg`}
                  height="100%"
                  objectFit="cover"
                  key={i}
                ></Image>
              </Box>
            );
          })}
        </Flex>
        <Flex direction="column" alignItems="center">
          <Text
            fontSize={"4xl"}
            fontWeight={"bold"}
            color="#211D70"
            fontFamily="Helvetica"
          >
            About India
          </Text>
          <Text
            fontSize={"md"}
            paddingLeft={"2%"}
            paddingRight={"2%"}
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            India, officially known as the Republic of India, is a vast and
            diverse country situated in South Asia. With an expansive landmass
            of around 3.29 million square kilometers, it ranks as the
            seventh-largest country globally. India's population is a remarkable
            facet, as it is the second-most populous nation in the world, with
            over 1.3 billion people, as of my last knowledge update in 2022.
            This diverse populace speaks a multitude of languages, practices
            various religions, and belongs to a wide array of ethnic groups.
            India boasts a rich and ancient history that spans millennia. It
            gave birth to several major religions, including Hinduism, Buddhism,
            Jainism, and Sikhism. Throughout its history, it was home to
            influential empires and dynasties such as the Maurya, Gupta, Mughal,
            and the British Empire. Indian culture is vibrant and diverse,
            encompassing a plethora of art forms, music, dance, literature, and
            culinary traditions. The country is known for its classical dance
            forms, like Bharatanatyam and Kathak, and celebrates a multitude of
            festivals, including Diwali, Holi, and Eid. Language diversity is
            another hallmark of India, with over 1,600 languages spoken. Hindi
            and English are the official languages, but each state has its own
            official language(s). Major regional languages include Bengali,
            Telugu, Marathi, Tamil, and Urdu. India's economy is one of the
            world's largest and fastest-growing, with a mixed economy
            encompassing agriculture, manufacturing, and services. It has gained
            recognition for its IT and software services industry and is a
            significant player in the global outsourcing market. As a federal
            parliamentary democratic republic, India has a multi-party political
            system. The country is marked by iconic landmarks, including the Taj
            Mahal, historic sites like the Red Fort and Qutub Minar, and natural
            wonders like the Himalayan mountain range and Kerala's backwaters.
          </Text>
        </Flex>
        <Flex direction={"row"} justifyContent="center" mt={"2%"}>
          {images2.map((i) => {
            return (
              <Box height={imgHeight} key={i}>
                <Image
                  src={`/images/goa/img${i}.jpg`}
                  height="100%"
                  objectFit="cover"
                  key={i}
                ></Image>
              </Box>
            );
          })}
        </Flex>
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          color="#211D70"
          fontFamily="Helvetica"
          align={"center"}
        >
          About Goa
        </Text>
        <Text
          fontSize={"md"}
          paddingLeft={"2%"}
          paddingRight={"2%"}
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          Goa is situated on the west coast of India and is one of the most
          beautiful states of India. It was formerly a Portuguese colony and is
          a unique cultural blend of the east and west. Goa is located adjacent
          to the North Western Ghats rainforests, one of the rare biodiversity
          hotspots of the world. The wildlife sanctuaries offer exposure to the
          diverse flora and fauna in the state. Goa is endowed with a variety of
          attractions including white sand beaches, lush green country-side,
          churches, temples, forts and monuments. Goa is a treasure trove of
          culture, music, dances and art forms that can be enjoyed during local
          festivals and celebrations. It is often said that ‘Goa never stop
          partying’ and is known for its vibrant night life. With its tropical
          climate, Goa is a perfect tourist destination for all seasons. With
          its pristine natural beauty, exquisite culture and rich history, the
          state is able to attract a large number of tourists from India and
          across the globe. This symposium will not only provide participants
          with a platform for intellectual exchange but also offer attendees a
          unique opportunity to delve into the captivating beauty of the state.
        </Text>
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          color="#211D70"
          fontFamily="Helvetica"
          align={"center"}
        >
          Birla Institute of Technology and Science (BITS) Pilani (Hosting
          Institute)
        </Text>
        <Text
          fontSize="15px"
          paddingLeft={"2%"}
          paddingRight={"2%"}
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          Birla Institute of Technology & Science, Pilani was declared as an
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
          Institute of Technology & Science, Pilani (BITS Pilani) has been
          consistently ranked high, by both government and private ranking
          agencies for its innovative processes and capabilities that have
          enabled it to impart quality education and emerge as the best private
          science and engineering Institute in India. In recognition of the high
          standard that BITS Pilani strives to uphold, the University Grant
          Commission, in 2018, has declared it as an “Institute of Eminence”
          (IOE).
        </Text>
        <Text
          ml="3rem"
          fontSize="1.5rem"
          fontWeight="600"
          color="#211D70"
          fontFamily="Helvetica"
        >
          How to reach to BITS Pilani K K Birla Goa Campus, Goa
        </Text>
        <Text
          fontSize="15px"
          paddingLeft={"2%"}
          paddingRight={"2%"}
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          Being a popular tourist destination and a haven for relaxation, Goa
          offers superb connectivity to major cities throughout the country.
          Nesting in the lap of verdant hills, overlooking the Zuari River,
          BITS, Pilani K K Birla Goa Campus is spread over an area of 180 acres.
          The location of campus is unique in the respect of scenic beauty and
          panoramic view of picturesque surrounding encompassing Zuari River,
          hillocks, waterways, forests and landscape. (IOE).
        </Text>
        <Image src="maps.png" mt={"2%"}></Image>
        <Text
          fontSize="15px"
          paddingLeft={"2%"}
          paddingRight={"2%"}
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
          align={"left"}
          width={"full"}
        >
          <br></br>
          Accessing BITS Pilani Goa Campus is facilitated through diverse
          transportation options, guaranteeing convenience for both attendees
          and visitors.
        </Text>
        <Text
          mt={"2%"}
          fontSize="1.5rem"
          fontWeight="600"
          color="#211D70"
          fontFamily="Helvetica"
          align={"left"}
          width="full"
          padding={"0 2%"}
        >
          Air Travel
        </Text>
        <Text
          fontSize="15px"
          paddingLeft={"2%"}
          paddingRight={"2%"}
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
          }}
          align={"left"}
          width={"full"}
        >
          <br></br>
          Goa boasts two airports, namely Goa International Airport (Dabolim),
          situated approximately 5 km away and Manohar International Airport
          (Mopa), which is roughly at a distance of 55 km from BITS Pilani K K
          Birla Goa campus, the venue for the symposium. Goa International
          Airport, being the closest, is extensively connected to major cities
          across India, providing a time-efficient air travel option. One can
          find regular flights to this tropical paradise from cities like New
          Delhi, Mumbai, Bengaluru, Hyderabad, Kochi, and Chennai. The fastest
          way to reach Goa is often by taking a flight from Mumbai or Bengaluru,
          with the journey typically lasting around an hour. Air India is
          recognized as the national carrier. However, travelers can choose
          among various airlines, including SpiceJet, IndiGo, Air Asia, Akasa
          Air and Vistara. Upon arrival, pre-paid taxis are readily available to
          reach the Campus.
        </Text>
        <Text
          mt={"2%"}
          fontSize="1rem"
          fontWeight="600"
          color="#211D70"
          fontFamily="Helvetica"
          align={"left"}
          width="full"
          padding={"0 2%"}
        >
          <u>Pre-paid Taxi service at the Airports</u>
        </Text>
        <Text align={"left"} width="full" padding={"0 2%"}>
          <br></br>
          Pre-paid Taxi counters are available at the airport arrival area.
        </Text>
        <Text align={"left"} width="full" padding={"0 2%"}>
          <br></br>
          Goa International Airport (Dabolim) to BITS Pilani K K Birla Goa
          Campus: ~Rs. 500/- ($6)
        </Text>
        <Text align={"left"} width="full" padding={"0 2%"}>
          <br></br>
          Manohar International Airport (Mopa) to BITS Pilani K K Birla Goa
          Campus: ~Rs. 4,000/- ($50)
        </Text>
        <Text align={"left"} width="full" padding={"0 2%"}>
          <br></br>
          One can also avail the ‘Goa Miles’ cab service via the Government
          certified transportation portal: https://www.goamiles.com.
        </Text>
        <Text align={"left"} width="full" padding={"0 2%"}>
          <br></br>
          <u>Note:</u> The rates may vary accordingly and can be higher if not
          pre-paid. The above rates and information are representative and
          approximate. Organizers are not responsible for any deviation in
          prices and information mentioned above.
        </Text>
        <Text
          mt={"2%"}
          fontSize="1.5rem"
          fontWeight="600"
          color="#211D70"
          fontFamily="Helvetica"
          align={"left"}
          width="full"
          padding={"0 2%"}
        >
          Rail Travel
        </Text>
        <Text align={"left"} width="full" padding={"0 2%"}>
          <br></br>
          Those inclined towards rail travel can commute by train and arrive at
          Karmali Railway Station, located about 20 km, Madgaon railway station,
          which is 22 km away or Vasco railway station which is 10 km from BITS
          Pilani K K Birla Goa Campus. These railway stations have established
          connections to major cities in the region.
        </Text>
        <Text align={"left"} width="full" padding={"0 2%"}>
          <br></br>
          Karmali Railway Station to BITS Pilani K K Birla Goa Campus: ~Rs.
          2,000/- ($25)
        </Text>
        <Text align={"left"} width="full" padding={"0 2%"}>
          <br></br>
          Madgaon Railway Station to BITS Pilani K K Birla Goa Campus: ~Rs.
          2,500/- ($30)
        </Text>
        <Text align={"left"} width="full" padding={"0 2%"}>
          <br></br>
          <u>Note:</u> The above rates and information are representative and
          approximate. Organizers are not responsible for any deviation in
          prices and information mentioned above.
        </Text>
        <Text
          mt={"2%"}
          fontSize="1.5rem"
          fontWeight="600"
          color="#211D70"
          fontFamily="Helvetica"
          align={"left"}
          width="full"
          padding={"0 2%"}
        >
          Road Travel
        </Text>
        <Text align={"left"} width="full" padding={"0 2%"}>
          <br></br>
          The campus is easily reachable by road, with well-maintained highways
          and road networks linking it to neighboring towns and cities like
          Mumbai, Bangalore, Pune, Hyderabad etc.
        </Text>
      </Flex>
    </ChakraProvider>
  );
}
