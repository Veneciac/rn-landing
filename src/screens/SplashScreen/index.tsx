import React, {useEffect} from 'react';
import {Actions} from 'react-native-router-flux';
import {Container, VersionText} from './style';

const SplashScreen = () => {
  return (
    <Container>
      <VersionText>
        HALO
      </VersionText>
    </Container>
  );
};

export default SplashScreen;