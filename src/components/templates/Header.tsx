import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TopMenu = (props: any) => {
  return (
    <>
      <SNav>
        <h1>{props.children}</h1>
        <SLink to="/home">TOP</SLink>
      </SNav>
    </>
  );
};

const SNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

const SLink = styled(Link)`
  color: red;
  padding-left: 30px;
`;
