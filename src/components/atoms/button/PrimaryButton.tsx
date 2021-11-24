import { Button, ChakraProvider } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  children: string;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <ChakraProvider>
      <Button onClick={onClick} colorScheme="blue">
        {children}
      </Button>
    </ChakraProvider>
  );
};
