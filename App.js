import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importação das telas
import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';


const Stack = createStackNavigator();

function Myapp() {
  return (
    // Recebe cada um das telas
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Myapp;