import { useLocation } from 'react-router';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import '../../App.css';
import { TopMenu } from '../templates/Header';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useDisclosure } from '@chakra-ui/hooks';
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
            <SImg src={`${base_url}${resultSet.poster_path}`} />
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
`;

const SContainer = styled.div`
  padding: 4.3rem;
  background-color: gray;
  display: flex;
`;

const SImg = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const SImgWrapper = styled.div`
  height: 800px;
  width: 700px;
  margin: 0 3rem;
`;

const SWrapper = styled.div`
  padding: 0.2rem 5rem;
  height: 40rem;
  width: 40rem;
  h1 {
    font-size: 60px;
    padding-bottom: 20px;
  }
  p {
    font-size: 30px;
    padding-bottom: 30px;
  }
`;
