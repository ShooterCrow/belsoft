import { Box, Image } from '@chakra-ui/react';

const CurvedLine = () => {
  return (
    <Box
      pos="absolute"
      right={"20rem"}
      top="103px"  // Adjust positioning as needed
      width="fit-content"
      height="100%"
      pointerEvents="none"
      zIndex="-1"
    >
      <Image 
        src="/heroLine1.svg"  // Ensure path is correct
        alt="Curved Background Line"
        layout="fill"
        objectFit="cover"
      />
    </Box>
  );
};

export default CurvedLine;