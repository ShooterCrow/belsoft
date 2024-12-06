import { Text } from "@chakra-ui/react";

const CorsivaText = ({ children, ...props }) => {
  return (
    <Text fontFamily="'Monotype Corsiva', serif" {...props}>
      {children}
    </Text>
  );
};

export default CorsivaText;
