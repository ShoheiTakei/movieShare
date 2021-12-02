import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Button, ChakraProvider } from '@chakra-ui/react';
import styled from 'styled-components';
import { FC, memo, useCallback, useEffect, useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  const [value, setValue] = useState('');
  const [arrList, setArrList] = useState([
    'おすすめの映画',
    'B級ホラー',
    '泣けるロマンス',
  ]);
  const handleChange = useCallback((event) => setValue(event.target.value), []);
  const addList = () => {
    // 配列の中にinputタグの中身を追加していく
    const newLists = [...arrList, value];
    value === ''
      ? alert('マイリスト名を入力してください')
      : setArrList(newLists);
    setValue('');
  };
  const changeNameList = () => {
    alert('名前変更ボタンが押された');
  };
  const deleteList = () => {
    // 配列から特定の要素のみを削除したい
    // 要素の指定方法を考える
  };
  return (
    <ChakraProvider>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray">
          <ModalHeader>マイリスト一覧</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>マイリスト名</FormLabel>
                <Input
                  onChange={handleChange}
                  value={value}
                  size="md"
                  alt="マイリスト名"
                />
                <Sul>
                  {arrList.map((listName: string, index) => {
                    return (
                      <SnewListWrapper>
                        <Sli key={index}>{listName}</Sli>
                        <SnewButtonWrapper>
                          <Button
                            onClick={changeNameList}
                            fontSize="1rem"
                            size="m"
                          >
                            名前変更
                          </Button>
                          <Button
                            onClick={deleteList}
                            fontSize="1rem"
                            size="m"
                            ml={2}
                          >
                            削除
                          </Button>
                        </SnewButtonWrapper>
                      </SnewListWrapper>
                    );
                  })}
                </Sul>
              </FormControl>
              <Button mt={2} onClick={addList}>
                保存
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
});

const Sul = styled.ul`
  padding: 20px;
`;
const Sli = styled.li`
  padding: 0.5em 0.5em 0.5em;
`;

const SnewListWrapper = styled.div`
  display: flex;
`;
const SnewButtonWrapper = styled.div`
  margin-top: 6px;
`;
