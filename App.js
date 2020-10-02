import React from 'react';
import {Button, View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Details} from './src/pages';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{alignSelf: 'center'}}
      source={require('./src/styles/img/banasoor.png')}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor: '#000000',
          headerTitleStyle: styles.titleStyle,
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: (props) => <LogoTitle {...props} />}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {backgroundColor: '#FFFFFF', elevation: 0, shadowOpacity: 0},
  titleStyle: {textAlign: 'center', fontSize: 18},
});
