import React from 'react'
import { Box,ChakraProvider,Text } from '@chakra-ui/react'

function page() {
  return (
    <ChakraProvider>
    <Box display="flex" flexDirection="column" alignItems="center" minH="80vh">
    <Text ml="3rem" fontSize="3rem" width="100%" fontWeight="600" color="#211D70" fontFamily="Helvetica">SIS 2024 Overview</Text>
    <Box width="80%" ><Text fontSize="15px" fontWeight="500">
    <b style={{fontSize:"1rem"}}>The 24th International Symposium on Surfactants in solution” will be held at BITS Pilani K K Birla Goa Campus from June 16-21, 2024. This Symposium is jointly organized by BITS Pilani K K Birla Goa Campus, IISER Pune and ICT Mumbai, in association with Society for Industrial Chemistry & Indian Society for Surface Science and Technology. 
Scope of the Symposium</b>
<br></br>
<br></br>
<ul>
<li>Thermodynamics, modelling, simulation and theory of surfactants-based systems</li>
<li>Surfactants adsorption at interfaces and pseudo-phase formation</li> 
<li>Mixed surfactant systems, surfactants in separation processes </li>
<li>Kinetics of surfactant-based systems </li>
<li>Bio derived, bioinspired and Gemini surfactants, sustainability in surfactants</li>
<li>Polymeric and polymerizable surfactants </li>
<li>Surfactants in applications </li>
<li>Surfactants wetting, spreading and capillary phenomena </li>
<li>Monolayers and Langmuir-Blodgett films</li>
<li>Surfactants – experimental methods, techniques and approaches </li>
<li>Surfactants in tribology </li>
<li>Adsorption layer dynamics at interfaces </li>
<li>General/other topics </li>
<li>Young Scientist Forum</li>
</ul>
</Text></Box>
    </Box>
    </ChakraProvider>
  )
}

export default page