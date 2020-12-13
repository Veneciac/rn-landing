import React from 'react';
import {Container, TitleText} from './style';

interface NavProps {
}

const Nav: React.FC<NavProps> = ({...props}) => {
  return (
    <Container>
      <TitleText>
        Lalala land
      </TitleText>
    </Container>
  );
};

export default Nav;
