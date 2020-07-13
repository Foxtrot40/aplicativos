import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from 'whatsapp/src/pages';
import { tealGreenDark, white } from '../services/designConstants';

const Stack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'WhatsApp',
          headerStyle: {
            backgroundColor: tealGreenDark,
          },
          headerTitleStyle: {
            color: white,
          },
          headerTitleAlign: 'left',
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
