import React, { useState } from 'react';
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
  const handleClick = () => setShowPs(![showPs]);
  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    // 条件分岐でメアドとパスワードのinputが中身が空文字ではない場合に保存ボタンが押せる様にする
    console.log('変更を検知');
    setMail(e.target.value);
    console.log(mail);
    setPass(e.target.value);
    console.log(pass);
  };
  // inputの中身が空文字の場合は、ボタンをクリックできない様にする
  // bug 表示フラグが発火しない
  // Enterを押したらボタンが発火する様にする
  // ボタンを押した時に起こる再レンダリングを防ぐ
  // メアドとパスが正しい場合は、パスを切り替えて遷移先へ移動する。違う場合はアラートで警告する
  return (
    <>
      <ChakraProvider>
        <Flex justify="center">
          <Box align="center" w="400px">
            <Stack spacing={6} mt="300px">
              <Text fontSize="3xl">サインイン</Text>
              <Input
                placeholder="メールアドレス"
                onChange={onChange}
                mail={mail}
              />
              <InputGroup>
                <Input
                  onChange={onChange}
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
              <Button isDisabled={saveClick}>保存</Button>
              {/* <Link to="/home" /> */}
            </Stack>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  );
};
