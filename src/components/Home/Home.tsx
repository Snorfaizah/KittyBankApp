import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import KittyyBank from '../KittyBank/KittyBank'
import HomeStyles from './HomeStyles';

const Home = () => {
    const navigation = useNavigation();
  
    return (
      <View style={HomeStyles.view}>
        <KittyyBank/>
      </View>
    );
};


export default Home;