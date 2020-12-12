import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import {SplashScreen} from 'screens';

const AppRouter = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="SplashScreen" initial title="SplashScreen" component={SplashScreen} />

      </Stack>
    </Router>
  );
};

export default AppRouter;