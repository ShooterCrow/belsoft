import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Flex, useBreakpointValue, Text } from "@chakra-ui/react";

const FAQs = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box mb={"149px"} mx={"80px"}>
      <Heading mb={"78px"} fontSize={"45"} fontWeight={"bold"} textAlign="left">FAQs</Heading>
      <Flex mx={"94px"} flexDir={isDesktop ? "row" : "column"} gap={8}>
        <Box flex="1">
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Text fontSize="24px" fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
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
                <Text fontSize="24px" fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
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
                <Text fontSize="24px" fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
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
                <Text fontSize="24px" fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
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
                <Text fontSize="24px" fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
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
                <Text fontSize="24px" fontWeight={"bold"} color={"#340066"} flex="1" textAlign="left">
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