import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
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

export const SignUpPage = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [showPs, setShowPs] = useState(false);
  const [saveClick, setSaveClick] = useState(true);
  useEffect(() => {
    const fragName = name === '';
    const fragMail = mail === '';
    const fragPass = pass === '';
    (fragName === fragMail) === fragPass
      ? setSaveClick(true)
      : setSaveClick(false);
  }, [mail, pass]);
  const handleClick = () => setShowPs(!showPs);
  // 一時的にHomeへ遷移する手段として書いてる
  const history = useHistory();
  const submit = () => {
    if (mail === 'admin' && pass === '0000') {
      history.push({ pathname: '/home' });
    }
  };

  // bug 表示フラグが発火しない
  // Enterを押したらボタンが発火する様にする
  // atomicデザインでコンポーネントの切り分けを行う
  return (
    <>
      <ChakraProvider>
        <Flex justify="center">
          <Box align="center" maxW="100%">
            <Stack spacing={5}>
              <Text fontSize="3xl">サインアップ</Text>
              <Input
                placeholder="ユーザーネーム"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name={name}
              />
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
                登録
              </Button>
              <Stack spacing={3}>
                <Link to="/">サインイン画面に戻る</Link>
                <Text>Copyright @ TAKEI</Text>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  );
};
