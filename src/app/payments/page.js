
"use client"
import { Box, Button,Flex, Heading } from "@chakra-ui/react"
import React from "react";
export default function payments() {
return(
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center">
        <Heading fontSize={'xl'}>Steps to pay using SBI Portal</Heading>
        <iframe src="/sbipayment.pdf" style={{width:"718px",height:"600px"}}></iframe>
        <Flex >
        <Button m="7px" colorScheme={'orange'} onClick={()=>{window.location='/register';}}>Go Back</Button>
        <Button m="7px" colorScheme={'orange'} onClick={()=>{window.open('https://www.onlinesbi.sbi/sbicollect/icollecthome.htm', '_blank');}}>Pay Now</Button>
        </Flex>
    </Box>
)
}