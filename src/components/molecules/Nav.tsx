import { useState, useEffect, useCallback } from 'react';
import '../styles/Nav.scss';
import { useHistory } from 'react-router';
import styled from 'styled-components';

type Props = {
  className?: string;
};

export const Nav = (props: Props) => {
  const [show, setShow] = useState(false);

  const history = useHistory();
  const onClickMyPage = useCallback(() => history.push('/mypage'), []);

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleShow);
    return () => {
      window.removeEventListener('scroll', handleShow);
    };
  }, []);
  return (
    <div className={`Nav ${show && 'Nav-black'}`}>
      <SImage
        className="Nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <SImage
        className="Nav-avater"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
        onClick={onClickMyPage}
      />
    </div>
  );
};

const SImage = styled.img`
  cursor: pointer;
`;
