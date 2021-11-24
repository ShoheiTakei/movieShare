import { useLocation } from 'react-router';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import '../../App.css';
import { TopMenu } from '../templates/Header';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/hooks';
import { Stack } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

const base_url = 'https://image.tmdb.org/t/p/original';

export const DetailPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const [resultSet, setResultSet] = useState<any>(location.state);
  console.log(resultSet);

  const onClickList = useCallback(() => onOpen(), []);

  return (
    <>
      <SAll>
        <TopMenu>映画詳細ページ</TopMenu>
        <SContainer>
          <SImgWrapper>
            <SImg src={`${base_url}${resultSet.backdrop_path}`} />
          </SImgWrapper>
          <SWrapper>
            <h1>{resultSet.name}</h1>
            <p>{resultSet.overview}</p>
            <PrimaryButton onClick={onClickList}>
              マイリストへ追加
            </PrimaryButton>
          </SWrapper>
        </SContainer>
      </SAll>
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export const SAll = styled.div`
  color: #fff;
  background-color: #111;

  .Link {
    color: red;
  }
`;

const SContainer = styled.div`
  background-color: gray;
  margin: 0 auto;
  display: flex;
  height: max-height;
  width: max-width;
`;

const SImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const SImgWrapper = styled.div`
  height: 900px;
  width: 900px;
  margin: 0 100px;
`;

const SWrapper = styled.div`
  padding: 200px 100px;
  height: 400px;
  width: 400px;

  h1 {
    font-size: 30px;
  }
`;
