import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Flex, useBreakpointValue, Text } from "@chakra-ui/react";
import HeadingCustom from "./HeadingCustom";

const FAQs = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box mb={{base: "50px", xl: "149px"}} mx={{base: "40px", xl: "80px"}}>
      <HeadingCustom mb={{xl: "78px"}} font={"45px"} content={"FAQs"} hAlign="left" />
      <Flex mx={{base: "0px", xl: "94px"}} flexDir={isDesktop ? "row" : "column"} >
        <Box flex="1">
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Text fontSize={{base: "20px", xl: "24px"}} fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
                  Lorem ipsum dolor sit amet, consectetur adi elit.
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
              <Text fontSize={"18px"} >Belsoft Systems offers web development, mobile app development, desktop software development, maintenance, and technical support.</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Text fontSize={{base: "20px", xl: "24px"}} fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
                  Lorem ipsum dolor sit amet, consectetur adi elit.
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize={"18px"} >Belsoft Systems offers web development, mobile app development, desktop software development, maintenance, and technical support.</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Text fontSize={{base: "20px", xl: "24px"}} fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
                  Lorem ipsum dolor sit amet, consectetur adi elit.
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize={"18px"} >Belsoft Systems offers web development, mobile app development, desktop software development, maintenance, and technical support.</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box flex="1">
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Text fontSize={{base: "20px", xl: "24px"}} fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
                  Lorem ipsum dolor sit amet, consectetur adi elit.
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize={"18px"} >Belsoft Systems offers web development, mobile app development, desktop software development, maintenance, and technical support.</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Text fontSize={{base: "20px", xl: "24px"}} fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
                  Lorem ipsum dolor sit amet, consectetur adi elit.
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize={"18px"} >Belsoft Systems offers web development, mobile app development, desktop software development, maintenance, and technical support.</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Text fontSize={{base: "20px", xl: "24px"}} fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
                  Lorem ipsum dolor sit amet, consectetur adi elit.
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize={"18px"} >Belsoft Systems offers web development, mobile app development, desktop software development, maintenance, and technical support.</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};

export default FAQs;