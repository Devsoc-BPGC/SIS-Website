
"use client"
import { Box, Button,Flex } from "@chakra-ui/react"
import React from "react";
export default function payments() {
return(
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center">
        <h1 style={{fontSize:"30px", marginTop:"10px"}}><b>Step to pay using SBI Portal</b></h1>
        <Flex >
        <Button m="7px" onClick={()=>{window.location='/register';}}>Go Back</Button>
        <Button m="7px" onClick={()=>{window.open('https://www.onlinesbi.sbi/sbicollect/icollecthome.htm', '_blank');}}>Pay Now</Button>
        </Flex>
<iframe src="/sbipayment.pdf" style={{width:"718px",height:"600px"}}></iframe>
    </Box>
)
}