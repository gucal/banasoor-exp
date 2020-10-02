import React from 'react';
import {StyleSheet, Image} from 'react-native';
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
});
