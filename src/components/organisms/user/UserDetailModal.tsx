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
import { FC, memo, useCallback, useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const [value, setValue] = useState();
  const { isOpen, onClose } = props;
  const handleChange = useCallback((event) => setValue(event.target.value), []);
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
                <Input onChange={handleChange} size="md" alt="マイリスト名" />
                <p>{value}</p>
              </FormControl>
              <Button>保存</Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
});
