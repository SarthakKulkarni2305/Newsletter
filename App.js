import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

   return (
    <NavigationContainer>
      
    <Stack.Navigator>

    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
    options={{
      title: 'Welcome' ,
      headerTitleStyle: {
       fontSize: 20,
      },
      headerTitleAlign: 'center',
    }}
   />
  
  <Stack.Screen name="LoginScreen" component={LoginScreen}
   options={{
    title: 'Subscribe' ,
    headerTitleStyle: {
     fontSize: 20,
    },
    headerTitleAlign: 'center',
  }}
    
    />

    </Stack.Navigator>
 
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
