import { Button, ChakraProvider } from '@chakra-ui/react';

export const PrimaryButton = (props: { children: any }) => {
  const { children } = props;
  return (
    <ChakraProvider>
      <Button colorScheme="blue">{children}</Button>
    </ChakraProvider>
  );
};
