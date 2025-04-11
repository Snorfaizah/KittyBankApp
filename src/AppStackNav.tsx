
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home/Home';
import Header from './components/shareable/Header/Header'
const Stack = createNativeStackNavigator();

const AppStackNav = () => {
  return (
    // <Home/>
    <Stack.Navigator>
        <Stack.Screen name="Kitty Bank" component={Home}   options={{
          header: () => <Header />,
        }}/>
    </Stack.Navigator>
  );
}

export default AppStackNav