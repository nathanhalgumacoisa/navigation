import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Profile from './screens/Profile';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home}/>
        <stack.screen name="Profile" component={Profile}/>
        <stack.Screen name="Contact" component={Contact}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
