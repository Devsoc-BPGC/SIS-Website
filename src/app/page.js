import Navbar from "./HomePage/navbar";

import { ChakraProvider } from '@chakra-ui/react'
import Line1 from "./HomePage/line1";

export default function Home () {
    return (
        <>
            <ChakraProvider>
                <Navbar />
                <Line1 />
            </ChakraProvider>
        </>
    );
}