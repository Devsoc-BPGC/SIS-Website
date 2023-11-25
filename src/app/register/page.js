"use client";
import { useState, useEffect } from "react";
import validate from "./validator.js";
import { Country, State } from "country-state-city";
import validate_1 from "./validator_1.js";
import validate_2 from "./validator_2.js";
import validate_3 from "./validator_3.js";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  ChakraProvider,
  RadioGroup,
  Radio,
  HStack,
  VStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormErrorMessage,
  Stack,
  Checkbox,
} from "@chakra-ui/react";

import Navbar from "../HomePage/navbar";
const CountryData = Country.getAllCountries().map((country) => ({
  value: country.isoCode,
  displayValue: `${country.name} - ${country.isoCode}`,
}));
function getState(countryCode) {
  const StateData = State.getStatesOfCountry(countryCode).map((state) => ({
    value: state.name,
    displayValue: `${state.name} - ${state.isoCode}`,
  }));
  return StateData;
}
const registrationType = {
  "Academic Delegate (International)": 1,
  "Industry Delegate (International)": 1,
  "International Student": 1,
  "Academic Delegate (National)": 0,
  "Industry Delegate (National)": 0,
  "Student (National)": 0
}
const costs = {
  "Academic Delegate (International)": "$450",
  "Industry Delegate (International)": "$450",
  "International Student": "$200",
  "Academic Delegate (National)": "₹7,000",
  "Industry Delegate (National)": "₹10,000",
  "Student (National)": "₹3,500",
  National: "₹2,000",
  International: "$100",
};
const Form1 = (props) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Invitee Information
      </Heading>
      <Flex>
        <FormControl mr="5%" isRequired>
          <FormLabel>Prefix</FormLabel>
          <Select
            value={props.formData.prefix}
            onChange={props.getHandler("prefix")}
          >
            <option value="Prof..">Prof.</option>
            <option value="Dr.">Dr.</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Miss.">Miss.</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex mt="2%">
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            value={props.formData.firstName}
            onChange={props.getHandler("firstName")}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            placeholder="Last name"
            value={props.formData.lastName}
            onChange={props.getHandler("lastName")}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%" isRequired>
        <Text>Gender : </Text>
        <RadioGroup
          onChange={(e) => {
            props.setFormData((formData) => {
              const fd = { ...formData, gender: e };
              localStorage.setItem("formData", JSON.stringify(fd));
              return fd;
            });
          }}
          value={props.formData.gender}
        >
          <Stack direction="row">
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
            <Radio value="Other">Other</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl mt="2%" isRequired>
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          value={props.formData.email}
          onChange={props.getHandler("email")}
        />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel>Invited Speakers</FormLabel>
        <Checkbox
          isChecked={props.formData.invitedSpeaker === "Yes"}
          onChange={(e) => {
            props.setFormData((formData) => {
              const fd = {
                ...formData,
                invitedSpeaker: e.target.checked ? "Yes" : "No",
              };
              localStorage.setItem("formData", JSON.stringify(fd));
              return fd;
            });
          }}
        >
          Are you an invited speaker?
        </Checkbox>
      </FormControl>

      <FormControl mt="2%" isRequired>
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Registration type</FormLabel>
          <RadioGroup
            defaultValue="Academic Delegate (International)"
            value={props.formData.registrationType}
            onChange={(e) => {
              props.setFormData((formData) => {
                const fd = { ...formData, registrationType: e };
                localStorage.setItem("formData", JSON.stringify(fd));
                return fd;
              });
            }}
          >
            <VStack spacing="24px" align="left">
              <Radio value="Academic Delegate (International)">
                Academic Delegate {"(International)"}
              </Radio>
              <Radio value="Industry Delegate (International)">
                Industry Delegate {"(International)"}
              </Radio>
              <Radio value="International Student">International Student</Radio>
              <Radio value="Academic Delegate (National)">
                Academic Delegate {"(National)"}
              </Radio>
              <Radio value="Industry Delegate (National)">
                Industry Delegate {"(National)"}
              </Radio>
              <Radio value="Student (National)">Student {"(National)"}</Radio>
            </VStack>
          </RadioGroup>
        </FormControl>
      </FormControl>
    </>
  );
};

const Form2 = (props) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Registration Information
      </Heading>
      <FormControl as={GridItem} colSpan={6} isRequired>
        <FormLabel
          htmlFor="company_university"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Company/University
        </FormLabel>
        <Input
          type="text"
          name="company_university"
          id="company_university"
          autoComplete="company/university"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={props.formData.company}
          onChange={props.getHandler("company")}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={6} isRequired>
        <FormLabel
          htmlFor="job_title"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Job Title
        </FormLabel>
        <Input
          type="text"
          name="job_title"
          id="job_title"
          autoComplete="job title"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={props.formData.jobTitle}
          onChange={props.getHandler("jobTitle")}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={6} isRequired>
        <FormLabel
          htmlFor="address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Address
        </FormLabel>
        <Input
          type="text"
          name="address"
          id="address"
          autoComplete="address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={props.formData.address}
          onChange={props.getHandler("address")}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={6} isRequired>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Country/Region
        </FormLabel>
        <Select
          type="text"
          name="country"
          id="country"
          autoComplete="country"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={props.formData.country}
          onChange={props.getHandler("country")}
        >
          {CountryData.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]} isRequired>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={props.formData.city}
          onChange={props.getHandler("city")}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Select
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={props.formData.state}
          onChange={props.getHandler("state")}
        >
          {getState(props.formData.country).map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={props.formData.zip}
          onChange={props.getHandler("zip")}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
        <FormLabel
          htmlFor="work_phone"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Work Phone
        </FormLabel>
        <Input
          type="number"
          name="work_phone"
          id="work_phone"
          autoComplete="work_phone"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={props.formData.phone}
          onChange={props.getHandler("phone")}
        />
      </FormControl>
    </>
  );
};

const Form3 = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Guest Information
      </Heading>
      <Flex
        mt="2%"
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Text>
          Click "Add guest" to include additional guest information. Otherwise,
          click Next to continue.
        </Text>
        {props.formData.gadd ? (
          <Container
            mt="2%"
            border={"solid black 1px"}
            p="3%"
            borderRadius={"10px"}
          >
            <Heading size="sm">Guest Details :</Heading>
            <Text>First Name : {props.formData.gfirstName}</Text>
            <Text>Last Name : {props.formData.glastName}</Text>
            <Text>Email : {props.formData.gemail}</Text>
            <Text>Type : {props.formData.gtype}</Text>
            <Text>Gender : {props.formData.ggender}</Text>
            <Button
              colorScheme={"red"}
              mt="2%"
              size="sm"
              onClick={() => {
                props.setFormData((formData) => {
                  const fd = {
                    ...formData,
                    gadd: false,
                    gfirstName: "",
                    glastName: "",
                    gemail: "",
                    gtype: "National",
                    ggender: "Male",
                    gsame: "Yes",
                    gaddress: "",
                    gcountry: "",
                    gcity: "",
                    gstate: "",
                    gzip: "",
                    gphone: "",
                  };
                  localStorage.setItem("formData", JSON.stringify(fd));
                  return fd;
                });
              }}
            >
              Remove Guest
            </Button>
          </Container>
        ) : (
          <></>
        )}
        <Button
          colorScheme="orange"
          variant="outline"
          size="lg"
          mt="2%"
          onClick={onOpen}
          isDisabled={props.formData.gadd}
        >
          Add Guest
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Guest</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} justifyContent="center">
              <FormControl mr="5%" isRequired>
                <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                  First name
                </FormLabel>
                <Input
                  id="first-name"
                  placeholder="First name"
                  value={props.formData.gfirstName}
                  onChange={props.getHandler("gfirstName")}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                  Last name
                </FormLabel>
                <Input
                  id="last-name"
                  placeholder="Last name"
                  value={props.formData.glastName}
                  onChange={props.getHandler("glastName")}
                />
              </FormControl>

              <FormControl mt="2%" isRequired>
                <FormLabel htmlFor="email" fontWeight={"normal"}>
                  Email address
                </FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={props.formData.gemail}
                  onChange={props.getHandler("gemail")}
                />
              </FormControl>

              <FormControl mt="2%" isRequired>
                <FormControl as="fieldset">
                  <FormLabel as="legend">Registration type</FormLabel>
                  <RadioGroup
                    defaultValue="National"
                    value={props.formData.gtype}
                    onChange={(e) => {
                      props.setFormData((formData) => {
                        const fd = { ...formData, gtype: e };
                        localStorage.setItem("formData", JSON.stringify(fd));
                        return fd;
                      });
                    }}
                  >
                    <VStack spacing="24px" align="left">
                      <Radio value="National">National{"(₹2,000)"}</Radio>
                      <Radio value="International">
                        International{"($100)"}
                      </Radio>
                    </VStack>
                  </RadioGroup>
                </FormControl>
              </FormControl>

              <FormControl mt="2%" isRequired>
                <Text>Gender : </Text>
                <RadioGroup
                  onChange={(e) => {
                    props.setFormData((formData) => {
                      const fd = { ...formData, ggender: e };
                      localStorage.setItem("formData", JSON.stringify(fd));
                      return fd;
                    });
                  }}
                  value={props.formData.ggender}
                >
                  <Stack direction="row">
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                    <Radio value="Other">Other</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl mt="2%">
                <FormLabel>Location Details</FormLabel>
                <Checkbox
                  isChecked={props.formData.gsame === "Yes"}
                  onChange={(e) => {
                    props.setFormData((formData) => {
                      const fd = {
                        ...formData,
                        gsame: e.target.checked ? "Yes" : "No",
                      };
                      localStorage.setItem("formData", JSON.stringify(fd));
                      return fd;
                    });
                  }}
                >
                  Same as delegate?
                </Checkbox>
              </FormControl>

              {props.formData.gsame === "Yes" ? (
                <></>
              ) : (
                <>
                  <FormControl as={GridItem} colSpan={6} isRequired>
                    <FormLabel
                      htmlFor="address"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                      mt="2%"
                    >
                      Address
                    </FormLabel>
                    <Input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="address"
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={props.formData.gaddress}
                      onChange={props.getHandler("gaddress")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6} isRequired>
                    <FormLabel
                      htmlFor="country"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                      mt="2%"
                    >
                      Country/Region
                    </FormLabel>
                    <Select
                      type="text"
                      name="country"
                      id="country"
                      autoComplete="country"
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={props.formData.gcountry}
                      onChange={props.getHandler("gcountry")}
                    >
                      {CountryData.map((option, index) => {
                        return (
                          <option key={index} value={option.value}>
                            {option.displayValue}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>

                  <FormControl
                    as={GridItem}
                    colSpan={[6, 6, null, 2]}
                    isRequired
                  >
                    <FormLabel
                      htmlFor="city"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                      mt="2%"
                    >
                      City
                    </FormLabel>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="city"
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={props.formData.gcity}
                      onChange={props.getHandler("gcity")}
                    />
                  </FormControl>

                  <FormControl
                    as={GridItem}
                    colSpan={[6, 3, null, 2]}
                    isRequired
                  >
                    <FormLabel
                      htmlFor="state"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                      mt="2%"
                    >
                      State / Province
                    </FormLabel>
                    <Select
                      type="text"
                      name="state"
                      id="state"
                      autoComplete="state"
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={props.formData.gstate}
                      onChange={props.getHandler("gstate")}
                    >
                      {getState(props.formData.gcountry).map(
                        (option, index) => {
                          return (
                            <option key={index} value={option.value}>
                              {option.displayValue}
                            </option>
                          );
                        }
                      )}
                    </Select>
                  </FormControl>

                  <FormControl
                    as={GridItem}
                    colSpan={[6, 3, null, 2]}
                    isRequired
                  >
                    <FormLabel
                      htmlFor="postal_code"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                      mt="2%"
                    >
                      ZIP / Postal
                    </FormLabel>
                    <Input
                      type="text"
                      name="postal_code"
                      id="postal_code"
                      autoComplete="postal-code"
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={props.formData.gzip}
                      onChange={props.getHandler("gzip")}
                    />
                  </FormControl>

                  <FormControl
                    as={GridItem}
                    colSpan={[6, 3, null, 2]}
                    isRequired
                  >
                    <FormLabel
                      htmlFor="work_phone"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                      mt="2%"
                    >
                      Work Phone
                    </FormLabel>
                    <Input
                      type="number"
                      name="work_phone"
                      id="work_phone"
                      autoComplete="work_phone"
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={props.formData.gphone}
                      onChange={props.getHandler("gphone")}
                    />
                  </FormControl>
                </>
              )}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="orange"
              variant={"ghost"}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              colorScheme={"orange"}
              isDisabled={!props.s3}
              onClick={() => {
                props.setFormData((formData) => {
                  const fd = { ...formData, gadd: true };
                  localStorage.setItem("formData", JSON.stringify(fd));
                  return fd;
                });
                onClose();
              }}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

// const Form4 = (props) => {
//   return (
//     <>
//       <Heading w="100%" textAlign={"center"} fontWeight="normal">
//         Payment
//       </Heading>
//       <Flex
//         mt="2%"
//         justifyContent={"center"}
//         alignItems={"center"}
//         direction={"column"}
//       >
//         <Text>Click on the link below to go to the payment portal.</Text>
//         <Button colorScheme="orange" variant="outline" size="lg" mt="2%">
//           Payment Portal
//         </Button>
//       </Flex>
//     </>
//   );
// };

const Form4 = (props) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Registration Summary
      </Heading>
      <Text mt={"2%"}>
        Amount Due :{" "}
        {props.formData.invitedSpeaker === "Yes"
          ? "Free"
          : costs[props.formData.registrationType] +
          (props.formData.gadd ? " + " + costs[props.formData.gtype] : "")}
      </Text>
      <Accordion allowToggle mt="2%">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Invitee Information
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>Prefix : {props.formData.prefix}</Text>
            <Text>First Name : {props.formData.firstName}</Text>
            <Text>Last Name : {props.formData.lastName}</Text>
            <Text>Gender : {props.formData.gender}</Text>
            <Text>Email Address : {props.formData.email}</Text>
            <Text>Invited Speaker : {props.formData.invitedSpeaker}</Text>
            <Text>Registration Type : {props.formData.registrationType}</Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Registration Information
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>Company/University : {props.formData.company}</Text>
            <Text>Job Title : {props.formData.jobTitle}</Text>
            <Text>Address : {props.formData.address}</Text>
            <Text>Country/Region : {props.formData.country}</Text>
            <Text>City : {props.formData.city}</Text>
            <Text>State/Province : {props.formData.state}</Text>
            <Text>Zip/Postal : {props.formData.zip}</Text>
            <Text>Work Phone : {props.formData.phone}</Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Guest Information
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {props.formData.gadd ? (
              <>
                <Text>Guest First Name : {props.formData.gfirstName}</Text>
                <Text>Guest Last Name : {props.formData.glastName}</Text>
                <Text>Guest Email : {props.formData.gemail}</Text>
                <Text>Guest Type : {props.formData.gtype}</Text>
                <Text>Guest Gender : {props.formData.ggender}</Text>
              </>
            ) : (
              <Text>No Guest Added</Text>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  const [step, setStep] = useState(1);
  var s1 = false;
  var s2 = false;
  var s3 = false;
  const [progress, setProgress] = useState(25.0);
  const [formData, setFormData] = useState({
    prefix: "Prof.",
    firstName: "",
    lastName: "",
    gender: "Male",
    email: "",
    invitedSpeaker: "No",
    registrationType: "Academic Delegate (International)",
    company: "",
    jobTitle: "",
    address: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    gadd: false,
    gfirstName: "",
    glastName: "",
    gemail: "",
    gtype: "National",
    ggender: "Male",
    gsame: "Yes",
    gaddress: "",
    gcountry: "",
    gcity: "",
    gstate: "",
    gzip: "",
    gphone: "",
  });

  const [submitting, steSubmitting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("formData") !== null) {
      setFormData(JSON.parse(localStorage.getItem("formData")));
    } else {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, []);

  const getHandler = (x) => {
    const handler = (e) => {
      setFormData((formData) => {
        const fd = { ...formData, [x]: e.target.value };
        localStorage.setItem("formData", JSON.stringify(fd));
        return fd;
      });
    };
    return handler;
  };
  s1 = Object.keys(validate_1(formData)).length == 0;
  s2 = Object.keys(validate_2(formData)).length == 0;
  s3 = Object.keys(validate_3(formData)).length == 0;
  return (
    <ChakraProvider>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="20px auto"
        as="form"
        minH={{ base: "75vh", md: "60vh" }}
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          colorScheme={"cyan"}
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1
            formData={formData}
            getHandler={getHandler}
            setFormData={setFormData}
          />
        ) : step === 2 ? (
          <Form2 formData={formData} getHandler={getHandler} />
        ) : step === 3 ? (
          <Form3
            formData={formData}
            s3={s3}
            getHandler={getHandler}
            setFormData={setFormData}
          />
        ) : (
          <Form4 formData={formData} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 25.0);
                }}
                isDisabled={step === 1}
                colorScheme="orange"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={
                  step === 4 || (step === 1 && !s1) || (step === 2 && !s2)
                }
                onClick={() => {
                  setStep(step + 1);
                  if (step === 4) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 25.0);
                  }
                }}
                colorScheme="orange"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 4 ? (
              <Button
                isLoading={submitting}
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  const err = validate(formData);
                  if (Object.keys(err).length == 0) {
                    steSubmitting(true);
                    fetch("/api/submit", {
                      method: "POST",
                      body: JSON.stringify(formData),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    })
                      .then((res) => {
                        if (res.status === 200) {
                          toast({
                            title: "Account created.",
                            description:
                              "Your Data has been submitted successfully",
                            status: "success",
                            duration: 3000,
                            isClosable: true,
                          });
                          steSubmitting(false);
                          try {
                            if (registrationType[formData.registrationType] === 1) {
                              console.log("International")
                              onOpen()
                            }else{
                              console.log("National")
                              window.location='/payments'
                            }
                          } catch (err) {
                            console.log(err)
                            console.log("Error")
                          }
                        } else {
                          toast({
                            title: "Request Failed",
                            description: "Failed to create account",
                            status: "error",
                            duration: 3000,
                            isClosable: true,
                          });
                        }
                        steSubmitting(false);
                      })
                      .catch((err) => {
                        toast({
                          title: "Server Error",
                          description: "Failed to send request!",
                          status: "error",
                          duration: 3000,
                          isClosable: true,
                        });
                      });
                  } else {
                    var errprompt = Object.values(err).join();
                    toast({
                      title: "Validation Error",
                      description: errprompt,
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                  }
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>International Payment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <b>International Delegate have to pay to the given account</b><br></br>
              Name - BITS Pilani K K Birla Goa Campus<br></br>
              Amount - {costs[formData.registrationType]}<br></br>
              Bank - State Bank of India<br></br>
              Branch - BITS Pilani Goa Centre<br></br>
              Account no. 30803684122<br></br>
              IFSC code - SBIN0010720<br></br>
              SWIFT Code - SBININBB229<br></br>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
}
