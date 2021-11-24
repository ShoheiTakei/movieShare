import { TopMenu } from '../templates/Header';
import styled from 'styled-components';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { ChakraProvider, Input } from '@chakra-ui/react';
import { SAll } from '../pages/DetailPage';

export const MyPage = () => {
  return (
    <>
      <SAll>
        <TopMenu>マイページ</TopMenu>
        <SmyPageWrapper>
          <SaccountSetting>
            <h1>アカウント設定</h1>
            <p>ユーザーネーム</p>
            <ChakraProvider>
              <Input type="text" placeholder="ユーザーネーム" />
              <p>メールアドレス</p>
              <Input type="text" placeholder="メールアドレス" />
              <p>パスワード</p>
              <Input type="text" placeholder="パスワード" />
              <p>パスワード確認</p>
              <Input type="text" placeholder="パスワード確認" />
            </ChakraProvider>
            <PrimaryButton>保存</PrimaryButton>
          </SaccountSetting>
          <SmylistWrapper>
            <h1>マイリスト</h1>
            <ul>
              <li>おすすめマイリスト</li>
              <li>夏にみたいホラー映画</li>
              <li>復帰崩壊コメディ映画</li>
            </ul>
          </SmylistWrapper>
        </SmyPageWrapper>
      </SAll>
    </>
  );
};

const SmyPageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SaccountSetting = styled.div``;

const SmylistWrapper = styled.div`
  margin-left: 80px;
`;
