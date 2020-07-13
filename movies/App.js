import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/sharedServices/reduxStore';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/sharedServices/navigation';

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  </NavigationContainer>
);

export default App;
