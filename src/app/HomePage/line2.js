import {
    Flex,
    Text,
    Image
} from '@chakra-ui/react';

export default function Line2 () {
  return (
    <Flex
        direction={{base: 'column', md: 'row'}}
        alignItems={'stretch'}
        bgColor={'#FAC92E'}
    >
        <Flex
            direction={'column'}
            height={'-webkit-fit-content'}
            width={{"base":'100%', "md":'690px'}}
            bgColor={'white'}
            alignItems={'center'}
            justifyContent={'center'}
            // padding={'1%'}
            color={'#211D70'}
        >
          <Flex alignItems={'start'} width={"100%"} p={"1%"}>
            <Text fontSize={'sm'} color={"#211D70"} align={'center'} fontWeight={"bold"}>
              Jointly organised by:
            </Text>
          </Flex>
          <Flex alignItems={'stretch'} justifyContent={'space-evenly'} width={"100%"} p={"1%"}>
            <Image src="/bpgc.png" width={100} marginTop={2}/>
            <Image src="/iser.png" width={45} height={45}/>
            <Image src="/ict.png" width={45} height={45}/>
          </Flex>
          <Flex bgColor={"#D9D9D9"} marginTop={"2%"} paddingLeft={"5%"} paddingRight={"5%"} paddingTop={"1%"} paddingBottom={"1%"}>
            <Text color={"black"} align={"center"} fontSize={"smaller"}>
              In association with the Society for Industrial Chemistry & the Indian Society for Surface Science and Technology
            </Text>
          </Flex>
        </Flex>
        <Flex
            direction={'row'}
            height={'100%'}
            width={'100%'}
            bgColor={'#FAC92E'}
            alignItems={'center'}
            justifyContent={'center'}
            // padding={'2%'}
            paddingTop={"1.5%"}
        >
          <Flex alignItems={"stretch"} justifyContent={"space-evenly"}>
            <Flex direction={"column"}>
              <Text fontSize={{"base":"3xl","md":"4xl"}} align={"center"}>
                116
              </Text>
              <Text fontSize={{"base":"lg","md":"xl"}} align={"center"}>
                Days
              </Text>
            </Flex>
            <Text fontSize={{"base":"5xl","md":"6xl"}} p={"5%"} marginTop={"-5%"}>:</Text>
            <Flex direction={"column"} >
              <Text fontSize={{"base":"3xl","md":"4xl"}} align={"center"}>
                116
              </Text>
              <Text fontSize={{"base":"lg","md":"xl"}} align={"center"}>
                Hours
              </Text>
            </Flex>
            <Text fontSize={{"base":"5xl","md":"6xl"}} p={"5%"} marginTop={"-5%"}>:</Text>
            <Flex direction={"column"}>
              <Text fontSize={{"base":"3xl","md":"4xl"}} align={"center"}>
                116
              </Text>
              <Text fontSize={{"base":"lg","md":"xl"}} align={"center"}>
                Minutes
              </Text>
            </Flex>
            <Text fontSize={{"base":"5xl","md":"6xl"}} p={"5%"} marginTop={"-5%"}>:</Text>
            <Flex direction={"column"}>
              <Text fontSize={{"base":"3xl","md":"4xl"}} align={"center"}>
                116
              </Text>
              <Text fontSize={{"base":"lg","md":"xl"}} align={"center"}>
                Seconds
              </Text>
            </Flex>
          </Flex>
        </Flex>
    </Flex>
  );
}