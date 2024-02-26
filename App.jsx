import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Contact';
import Contact from './src/screens/Contact';
import Profile from './src/screens/Profile';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} 
        options={{
          title: "Tela Inicial",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
        />
        
        <stack.Screen name="Profile" component={Profile}/>
        <stack.Screen name="Contact" component={Contact}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
