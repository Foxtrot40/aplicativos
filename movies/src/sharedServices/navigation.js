import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'movies/src/screens/Home';
import MovieDetails from 'movies/src/screens/MovieDetails';
import RightComponent from './components/HomeHeader/RightComponent';
import { scale } from 'react-native-size-matters';

const Stack = createStackNavigator();

const NavigationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Movies List',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontSize: scale(20),
          fontWeight: 'bold',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: '#5bc4ff',
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
        },
        headerRight: () => <RightComponent />,
      }}
    />
    <Stack.Screen
      name="MovieDetails"
      component={MovieDetails}
      options={{
        title: 'Detalhes',
      }}
    />
  </Stack.Navigator>
);

export default NavigationStack;
