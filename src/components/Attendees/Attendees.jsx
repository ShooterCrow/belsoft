import React, { useState, useEffect, useRef } from 'react';
import { Flex, Box, Text, Image, IconButton, useBreakpointValue } from '@chakra-ui/react';

const attendees = [
  {
    name: 'Mr Belba Ngoy',
    testimonial: 'Always a remarkable experience for my team and myself',
    image: '/belba.png',
  },
  {
    name: 'Mr Belba Ngoy',
    testimonial: 'Always a remarkable experience for my team and myself',
    image: '/belba.png',
  },
  {
    name: 'Mr Belba Ngoy',
    testimonial: 'Always a remarkable experience for my team and myself',
    image: '/belba.png',
  },
  {
    name: 'Mr Belba Ngoy',
    testimonial: 'Always a remarkable experience for my team and myself',
    image: '/belba.png',
  },
  {
    name: 'Mr Belba Ngoy',
    testimonial: 'Always a remarkable experience for my team and myself',
    image: '/belba.png',
  },
];

const Attendees = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const visibleItems = 3;
  const totalItems = attendees.length;
  const autoSlideInterval = 1500;

  const carouselRef = useRef();

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalItems + visibleItems));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems + visibleItems) % (totalItems + visibleItems));
  };

  useEffect(() => {
    if (currentIndex === totalItems) {
      carouselRef.current.style.transition = 'none';
      setCurrentIndex(0);
    } else {
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  }, [currentIndex]);

  return (
    <Flex mb={"180px"} direction="column" align="center" justify="center" h="600px" position="relative" p={4} >
      {/* Heading */}
      <Text fontSize={isDesktop ? '45px' : '2xl'} fontWeight="bold" mb={"20px"}>
        What Do Our Attendees Have To Say?
      </Text>
      <Text fontSize={isDesktop ? '24px' : '2xl'} color="gray.500">
        Well See For Yourself!
      </Text>

      {/* Arrows Section */}
      <Flex w={"100%"} justify="flex-end" align="center" mb={4}>
        <IconButton
          aria-label="Previous"
          onClick={handlePrev}
          icon={<Image src="/ArrowRight.svg" alt="Previous" boxSize="40px" transform="rotate(180deg)" />}
          variant="ghost"
          size="lg"
          mr={4}
        />
        <IconButton
          aria-label="Next"
          onClick={handleNext}
          icon={<Image src="/ArrowRight.svg" alt="Next" boxSize="40px" />}
          variant="ghost"
          size="lg"
        />
      </Flex>

      {/* Carousel Section */}
      <Flex
        pos="relative"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
        justify="center">
        <Flex
          ref={carouselRef}
          transform={`translateX(-${(currentIndex % (totalItems + visibleItems)) * (100 / visibleItems)}%)`}
          transition="transform 0.5s ease-in-out"
          w={`${((totalItems + visibleItems) / visibleItems) * 100}%`}
          h="full" >

          {/* Render original items */}
          {attendees.map((attendee, index) => (
            <Flex key={index} direction="column" align="center" justify="center" flex={`0 0 ${100 / visibleItems}%`} p={4} >
              <Flex border={`3px solid #8300FF`} alignItems={"center"} justifyContent={"center"} borderRadius={"50%"} w={isDesktop ? `${195.84 + 23}px` : '100px'} h={isDesktop ? `${195.84 + 23}px` : '100px'} >
                <Image src={attendee.image} borderRadius="full" boxSize={isDesktop ? '195.84px' : '100px'}/>
              </Flex>
              <Text fontSize={isDesktop ? '2xl' : 'xl'} fontWeight="bold" mb={2}>
                {attendee.name}
              </Text>
              <Text fontSize={isDesktop ? 'xl' : 'md'} textAlign="center">
                {attendee.testimonial}
              </Text>
            </Flex>
          ))}

          {/* Duplicat */}
          {attendees.slice(0, visibleItems).map((attendee, index) => (
            <Flex
              key={`clone-${index}`}
              direction="column"
              align="center"
              justify="center"
              flex={`0 0 ${100 / visibleItems}%`}
              p={4} >
              <Flex border={`3px solid #8300FF`} alignItems={"center"} justifyContent={"center"} borderRadius={"50%"} w={isDesktop ? `${195.84 + 23}px` : '100px'} h={isDesktop ? `${195.84 + 23}px` : '100px'} >
                <Image src={attendee.image} borderRadius="full" boxSize={isDesktop ? '195.84px' : '100px'}/>
              </Flex>
              <Text fontSize={isDesktop ? '2xl' : 'xl'} fontWeight="bold" mb={2}>
                {attendee.name}
              </Text>
              <Text fontSize={isDesktop ? 'xl' : 'md'} textAlign="center">
                {attendee.testimonial}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Attendees;
