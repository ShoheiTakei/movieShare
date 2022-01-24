import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

export const ShowPassword = (
  setPassFc: any,
  pass: string,
  showPs: boolean,
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined
) => {
  return (
    <ChakraProvider>
      <InputGroup>
        <Input
          onChange={setPassFc}
          pass={pass}
          type={showPs ? 'text' : 'password'}
          placeholder="パスワード"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {showPs ? '非表示' : '表示'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </ChakraProvider>
  );
};
