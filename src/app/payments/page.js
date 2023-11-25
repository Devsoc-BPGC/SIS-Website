
"use client"
import { Box, Button,Flex, Heading } from "@chakra-ui/react"
import React from "react";
export default function payments() {
return(
    <Flex direction={'column'} alignItems="center" justifyContent="center">
        <Heading fontSize={'xl'}>Steps to pay using SBI Portal</Heading>
        <iframe src="/sbipayment.pdf" style={{height:"80vh",width:"500px"}} />
        <Flex >
        <Button m="7px" colorScheme={'orange'} onClick={()=>{window.location='/register';}}>Go Back</Button>
        <Button m="7px" colorScheme={'orange'} onClick={()=>{window.open('https://www.onlinesbi.sbi/sbicollect/icollecthome.htm', '_blank');}}>Pay Now</Button>
        </Flex>
    </Flex>
)
}