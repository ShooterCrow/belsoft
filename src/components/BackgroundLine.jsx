import { Box, Image } from '@chakra-ui/react';

const CurvedLine = () => {
  return (
    <Box
      display={{ base: "none", md: "none", lg: "none", xl: "block" }}
      pos="absolute"
      right={"13rem"}
      top="103px"
      width="fit-content"
      height="100%"
      pointerEvents="none"
      zIndex="-1"
    >
      <Image
        src="/heroLine1.svg"
        alt="Curved Background Line"
        layout="fill"
        objectFit="cover"
      />
    </Box>
  );
};

export default CurvedLine;