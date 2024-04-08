import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './componentes/LoginForm';
import OpcaoCal from './componentes/OpcaoCal';
import AgeScreen from './componentes/AgeScreen';
import InterestScreen from './componentes/InterestScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="OpcaoCal"
          component={OpcaoCal}
          options={{ title: 'Escolha uma opção!!' }}
        />
        <Stack.Screen
          name="AgeScreen"
          component={AgeScreen}
          options={{ title: 'Switch' }}
        />
        <Stack.Screen
          name="InterestScreen"
          component={InterestScreen}
          options={{ title: 'Juros' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}