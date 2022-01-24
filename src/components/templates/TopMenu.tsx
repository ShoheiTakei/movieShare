import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  faHome,
  faSearch,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Box, ChakraProvider, Flex, Spacer } from '@chakra-ui/react';

export const TopMenu = (props: any) => {
  const iconStyle = { padding: 10, fontSize: 60 };
  return (
    <>
      <ChakraProvider>
        <Flex>
          <Box p="3">
            <SLink to="/home">
              <FontAwesomeIcon style={iconStyle} icon={faHome} />
            </SLink>
          </Box>
          <Spacer />
          <Box p="3">
            {/* 後で、仮のsearchページ作成する 現状は、404 */}
            <SLink to="/search">
              <FontAwesomeIcon style={iconStyle} icon={faSearch} />
            </SLink>
            <SLink to="/mypage">
              <FontAwesomeIcon style={iconStyle} icon={faUserCircle} />
            </SLink>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  );
};

// const SNav = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 3rem;
// `;

const SLink = styled(Link)`
  color: white;
  :hover {
    color: #5adaf6;
  }
`;
