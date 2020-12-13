import React, {useEffect} from 'react';
import {Actions} from 'react-native-router-flux';
import {Container, VersionText} from './style';

const SplashScreen = () => {

  useEffect(() => {
    setTimeout(() => {
      Actions.replace('Home');
    }, 1000);
  }, []);

  return (
    <Container>
      <VersionText>
        Welcome
      </VersionText>
    </Container>
  );
};

export default SplashScreen;