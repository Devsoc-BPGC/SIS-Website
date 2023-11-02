import {
    Flex,
    Text
} from '@chakra-ui/react'

import Image from 'next/image';

export default function Line3 () {
    return (
        <Flex
            direction={{base: 'column', md: 'row'}}
            alignItems={'stretch'}
        >
            <Flex
                direction={'column'}
                height={'-webkit-fit-content'}
                width={{"base":'100%', "md":'690px'}}
                bgColor={'#3F3996'}
                alignItems={'center'}
                justifyContent={'center'}>
                    <Text color={"white"} fontFamily={'sans-serif'} p={"5%"} paddingTop={"8%"} paddingBottom={"0%"}>
                    The SIS conference will provide the ideal forum to stimulate ideas and establish collaborations as well as to initiate fruitful discussions on the most diverse topics of surfactant and colloid science, ranging from biocolloids to nanostructured interfaces, from self-assembled materials to formulations.
                    </Text><Text color={"white"} fontFamily={'sans-serif'} p={"5%"} paddingTop={"4%"} paddingBottom={"0%"}>
                    After the previous symposia in Melbourne (2010) and Edmonton (2012), SIS comes back to Europe and for the first time to Portugal. Coimbra, which is located approximately two hours by train north of Lisbon, is a friendly university town with an outstanding historical heritage, namely its University, which was founded in 1290 and is thus one of the world's oldest universities.
                    </Text><Text color={"white"} fontFamily={'sans-serif'} p={"5%"} paddingTop={"4%"}>
                    We are looking forward to hosting you in Coimbra in June 2014 and to make SIS2014 a memorable scientific and cultural experience.
                    </Text>
            </Flex>
            <Flex
                direction={'row'}
                height={'-webkit-fit-content'}
                width={'100%'}
                // alignItems={'strech'}
                justifyContent={'start'}
                // padding={'5%'}
            >
                <Image src="/symposium.png" width={500} height={350} alt='symposium'/>
                <Flex alignItems={'center'} width={'100%'} justifyContent={'center'}>
                    <Flex direction={'column'}>
                        <Text fontSize={'2xl'}>The</Text>
                        <Flex alignItems={'end'}>
                            <Text fontSize={'8xl'} fontWeight={'semibold'} marginTop={'-1.5rem'} marginBottom={'-1.5rem'}>24</Text>
                            <Text fontSize={'4xl'} fontWeight={'semibold'}>th</Text>
                        </Flex>
                        <Text fontSize={'2xl'}>International Symposium</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}