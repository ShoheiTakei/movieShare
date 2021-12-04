import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

export const LoginPage = () => {
  const [showPs, setShowPs] = useState(false);
  const handleClick = () => setShowPs(![showPs]);

  return (
    <>
      <ChakraProvider>
        <Flex justify="center">
          <Box align="center" w="400px">
            <Stack spacing={6} mt="300px">
              <Text fontSize="3xl">サインイン</Text>
              <Input placeholder="メールアドレス" />
              <InputGroup>
                <Input
                  type={showPs ? 'text' : 'password'}
                  placeholder="パスワード"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {showPs ? '非表示' : '表示'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button>保存</Button>
              {/* <Link to="/home" /> */}
            </Stack>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  );
};
