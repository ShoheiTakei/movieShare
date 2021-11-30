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
                <ul>
                  {arrList.map((listName: string) => {
                    return <li>{listName}</li>;
                  })}
                </ul>
              </FormControl>
              <Button onClick={addList}>保存</Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
});
