import {
    Flex,
    Slide,
    Text
} from '@chakra-ui/react'

import Image from 'next/image'
import  Carousel  from './carousel';
export default function Line1 () {
    return (
        <Flex
            direction={{base: 'column', md: 'row'}}
            alignItems={'stretch'}
            bgColor={'#6AD4D7'}
        >
            <Carousel/>
            {/* <Image src="/Bdome.png" width={700} height={700} alt={"bdome"} /> */}
            <Flex
                direction={'column'}
                height={'-moz-max-content'}
                width={'100%'}
                bgColor={'#6AD4D7'}
                alignItems={'center'}
                justifyContent={'center'}
                // padding={'5%'}
            >
                <Flex
                    marginBottom={{base:'1rem',md:'2rem'}}
                    color={'#211D70'}
                    direction={{base:'column',md:'row'}}
                >
                    <Flex
                        direction={'column'}
                        marginRight={{base:0,md:'1rem'}}
                    >
                        <Text 
                            fontSize={'6xl'}
                            align={'center'}
                        >
                            16-21
                        </Text>
                        <Text 
                            fontSize={'4xl'}
                            align={'center'}
                        >
                            June 2024
                        </Text>
                    </Flex>
                    <Text height={{base:'2px',md:'100%'}} width={{base:'100%',md:'2px'}} bgColor={'#211D70'}></Text>
                    <Flex
                        direction={'column'}
                        marginLeft={{base:'0',md:'1rem'}}
                        fontSize={'5xl'}
                        fontWeight={'extrabold'}
                        justifyContent={'center'}
                    >
                        <Text 
                            fontSize={'xl'}
                            color={'orange.500'}
                            marginTop={'2%'}
                        >
                            24th International Symposium
                        </Text>
                        <Text
                            align={'left'}
                        >
                            Surfactants in Solution
                        </Text>
                        <Text 
                            color={'#ED1C24'}
                            align={'left'}
                        >
                            India
                        </Text>
                    </Flex>
                </Flex>
                <Text
                    fontFamily={'sans-serif'}
                    color={'black'}
                    fontSize={'xl'}
                >
                    Birla Institute Of Technology & Science Pilani, K.K. Birla Goa Campus
                </Text>
            </Flex>
        </Flex>
    );
}