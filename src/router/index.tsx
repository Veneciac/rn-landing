import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {SplashScreen, Home} from 'screens';

const AppRouter = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="SplashScreen" title="SplashScreen" component={SplashScreen} />
        <Scene key="Home" initial title="Home" component={Home} />
      </Stack>
    </Router>
  );
};

export default AppRouter;