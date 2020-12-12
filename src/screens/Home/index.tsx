import React, {useEffect} from 'react';
import {Actions} from 'react-native-router-flux';
import {Container, VersionText} from './style';

const Home = () => {
  return (
    <Container>
      <VersionText>
        Home
      </VersionText>
    </Container>
  );
};

export default Home;