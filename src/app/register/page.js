"use client";

import { useState, useEffect } from "react";
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
} from "@chakra-ui/react";

import Navbar from "../HomePage/navbar";

const Form1 = (props) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Invitee Information
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel>Prefix</FormLabel>
          <Select
            value={props.formData.prefix}
            onChange={props.getHandler("prefix")}
          >
            <option value="Dr.">Dr.</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Miss.">Miss.</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex mt="2%">
        <FormControl mr="5%">
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

        <FormControl>
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
      <FormControl mt="2%">
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
        <FormControl as="fieldset">
          <FormLabel as="legend">Registration type</FormLabel>
          <RadioGroup
            defaultValue="Industrial Participant"
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
              <Radio value="Industrial Participant">
                Industrial Participant
              </Radio>
              <Radio value="Students/Post Graduates">
                Students/Post Graduates
              </Radio>
              <Radio value="Academic Professor">Academic Professor</Radio>
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
      <FormControl as={GridItem} colSpan={6}>
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

      <FormControl as={GridItem} colSpan={6}>
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

      <FormControl as={GridItem} colSpan={6}>
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

      <FormControl as={GridItem} colSpan={6}>
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
        <Input
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
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
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

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
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
        <Input
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
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
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

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
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
              <FormControl mr="5%">
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

              <FormControl>
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

              <FormControl mt="2%">
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

const Form4 = (props) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Payment
      </Heading>
      <Flex
        mt="2%"
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Text>Click on the link below to go to the payment portal.</Text>
        <Button colorScheme="orange" variant="outline" size="lg" mt="2%">
          Payment Portal
        </Button>
      </Flex>
    </>
  );
};

const Form5 = (props) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Registration Summary
      </Heading>
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
            <Text>Email Address : {props.formData.email}</Text>
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
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20.0);
  const [formData, setFormData] = useState({
    prefix: "Dr.",
    firstName: "",
    lastName: "",
    email: "",
    registrationType: "Industrial Participant",
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
  });

  const [submitting,steSubmitting] = useState(false);

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
            getHandler={getHandler}
            setFormData={setFormData}
          />
        ) : step === 4 ? (
          <Form4 />
        ) : (
          <Form5 formData={formData} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 20.0);
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
                isDisabled={step === 5}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 5) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 20.0);
                  }
                }}
                colorScheme="orange"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 5 ? (
              <Button
                isLoading={submitting}
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  steSubmitting(true);
                  fetch("/api/submit", {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers : {
                      "Content-Type" : "application/json"
                    }
                  })
                    .then((res) => {
                      if (res.status === 200) {
                        toast({
                          title: "Account created.",
                          description: "We've created your account for you.",
                          status: "success",
                          duration: 3000,
                          isClosable: true,
                        });
                      } else {
                        toast({
                          title: "Request Failed",
                          description: "Failed to create account",
                          status: "failure",
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
                        status: "failure",
                        duration: 3000,
                        isClosable: true,
                      });
                      steSubmitting(false);
                    });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </ChakraProvider>
  );
}
