import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import styled from 'styled-components';
import {
  Box,
  Button,
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
  const [saveClick, setSaveClick] = useState(true);
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  useEffect(() => {
    const fragMail = mail === '';
    const fragPass = pass === '';
    fragMail === fragPass ? setSaveClick(false) : setSaveClick(true);
  }, [mail, pass]);
  const handleClick = () => setShowPs(!showPs);
  const history = useHistory();
  const submit = () => {
    if (mail === 'admin') {
      history.push({ pathname: '/home' });
    }
  };
  // bug 表示フラグが発火しない
  // Enterを押したらボタンが発火する様にする
  // ボタンを押した時に起こる再レンダリングを防ぐ
  // メアドとパスが正しい場合は、パスを切り替えて遷移先へ移動する。違う場合はアラートで警告する
  return (
    <>
      <ChakraProvider>
        <Flex justify="center">
          <Box align="center" maxW="100%">
            <Stack spacing={6}>
              <Text fontSize="3xl">サインイン</Text>
              <Input
                placeholder="メールアドレス"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
                mail={mail}
              />
              <InputGroup>
                <Input
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
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
              <Button isDisabled={saveClick} onClick={submit}>
                保存
              </Button>
              <Text>Copyright @ TAKEI</Text>
            </Stack>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  );
};
