import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TopMenu = (props: any) => {
  return (
    <>
      <SNav>
        <h1>{props.children}</h1>
        <SLink to="/">TOP</SLink>
      </SNav>
    </>
  );
};

const SNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const SLink = styled(Link)`
  color: red;
`;
