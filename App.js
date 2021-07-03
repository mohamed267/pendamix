import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './App/Screens/landingScreen';
import Choose from './App/Screens/choose';
import Login from './App/Screens/login';
import Signup from './App/Screens/signup';
import UserNav from './App/Screens/userNav';
import Check from './App/Screens/check';
import Welcome from './App/Screens/Welcome';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>


        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="UserNav"
          component={UserNav}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Welcome' }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }} />
          <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Choose"
          component={Choose}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Check"
          component={Check}
          options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {

  }
});
export default App;
