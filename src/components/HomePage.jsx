import React from 'react';
import { Box, Flex, Heading, Text, Button, Image, Divider } from '@chakra-ui/react';
// import { Calendar as CalendarIcon, LocationOn as LocationIcon } from 'lucide-react';

const HomePage = () => {
  return (
    <Box maxW="full" bg="gray.50" py={20}>
      <Flex direction="column" align="center" justify="center" px={4}>
        <Heading as="h1" size="4xl" mb={4}>Connect, Collaborate, Innovate!</Heading>
        <Text fontSize="xl" mb={8}>
          Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem.
        </Text>
        <Button colorScheme="purple" variant="solid" size="lg">
          Register For Our Next Event
        </Button>
      </Flex>

      <Flex pos="relative" mt={12}>
        <Divider
          pos="absolute"
          top="50%"
          left="0"
          right="0"
          transform="translateY(-50%)"
          borderColor="purple.500"
          borderWidth={2}
          zIndex={0}
        />
        <Flex direction="column" align="center" justify="center" px={4} zIndex={1}>
          <Image src="/founders-friday-event.jpg" alt="Founders Friday Event" rounded="md" mb={4} />
          <Flex align="center" mb={2}>
            {/* <CalendarIcon color="purple.500" size={20} /> */}
            <Text ml={2}>July 28th, 2023</Text>
          </Flex>
          <Flex align="center">
            <LocationIcon color="purple.500" size={20} />
            <Text ml={2}>Downtown Co-working Space</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" align="center" justify="center" mt={12} px={4}>
        <Heading as="h2" size="2xl" mb={4}>Who Are We?</Heading>
        <Flex align="center">
          <Image src="/team-photo.jpg" alt="Founders Friday Team" rounded="full" mr={4} />
          <Text>
            Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and fuel their entrepreneurial journeys.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomePage;