import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';

const Header = () => {
    return (
        <View style={{ flex: 1 }}>
      <View
        style={{
          height: 70,
          backgroundColor: '#ffc2f9',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      />
      <View style={{ flex: 1, marginTop: 30 }}>
        <Text>Home</Text>
      </View>
    </View>
    )
}

export default Header