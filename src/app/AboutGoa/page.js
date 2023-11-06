"use client";
import { Box,Image,Text,ChakraProvider } from "@chakra-ui/react";
import Navbar from "../HomePage/navbar";
export default function AboutIndia() {
    var imgHeight = "7rem";
    return (
        <ChakraProvider>
        <Navbar />
        <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" flexDirection="row" justifyContent="center" maxWidth="45rem">
        <Box height={imgHeight} width="18%" ><Image src="/image2.png" height="100%" objectFit="cover"></Image></Box>
        <Box height={imgHeight} width="18%" ><Image src="/image3.png" height="100%" objectFit="cover"></Image></Box>
        <Box height={imgHeight} width="18%" ><Image src="/image5.png" height="100%" objectFit="cover"></Image></Box>
        <Box height={imgHeight} width="18%" ><Image src="/image6.png" height="100%" objectFit="cover"></Image></Box>
        <Box height={imgHeight} width="18%" ><Image src="/image7.png" height="100%" objectFit="cover"></Image></Box>
        </Box>
        <Text ml="3rem" fontSize="3rem" width="100%" fontWeight="800" color="#211D70" fontFamily="Helvetica">About Goa</Text>
        <Box width="80%" backgroundImage="/india.png" backgroundSize="contain" bgPos="center" bgRepeat="no-repeat"><Text fontSize="15px">
            India, officially known as the Republic of India, is a vast and diverse country situated in South Asia. With an expansive landmass of around 3.29 million square kilometers, it ranks as the seventh-largest country globally. India's population is a remarkable facet, as it is the second-most populous nation in the world, with over 1.3 billion people, as of my last knowledge update in 2022. This diverse populace speaks a multitude of languages, practices various religions, and belongs to a wide array of ethnic groups.
            <br /> <br /> 
            India boasts a rich and ancient history that spans millennia. It gave birth to several major religions, including Hinduism, Buddhism, Jainism, and Sikhism. Throughout its history, it was home to influential empires and dynasties such as the Maurya, Gupta, Mughal, and the British Empire.
            <br /> <br /> 
            Indian culture is vibrant and diverse, encompassing a plethora of art forms, music, dance, literature, and culinary traditions. The country is known for its classical dance forms, like Bharatanatyam and Kathak, and celebrates a multitude of festivals, including Diwali, Holi, and Eid.
            <br /> <br /> 
            Language diversity is another hallmark of India, with over 1,600 languages spoken. Hindi and English are the official languages, but each state has its own official language(s). Major regional languages include Bengali, Telugu, Marathi, Tamil, and Urdu.
            <br /> <br /> 
            India's economy is one of the world's largest and fastest-growing, with a mixed economy encompassing agriculture, manufacturing, and services. It has gained recognition for its IT and software services industry and is a significant player in the global outsourcing market.
            <br /> <br /> 
            As a federal parliamentary democratic republic, India has a multi-party political system. The country is marked by iconic landmarks, including the Taj Mahal, historic sites like the Red Fort and Qutub Minar, and natural wonders like the Himalayan mountain range and Kerala's backwaters.
</Text></Box>
        </Box>
        </ChakraProvider>
    );
}