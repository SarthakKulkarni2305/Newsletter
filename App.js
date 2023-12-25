import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemon/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemon/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();






{/*
export default function App() {
  return (
  <View>
  <NavigationContainer>
  <View style={styles.container}>
 <LittleLemonHeader />
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Details_A} />
    </Stack.Navigator>
  </View>
  <View style={styles.footerContainer}>
   <LittleLemonFooter />
  </View>
</NavigationContainer>
</View>
  );
}
*/}

export default function App() {

 
   return (
    <NavigationContainer>
      
      
    <Stack.Navigator>


    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
    options={{
      title: 'Welcome' ,
      headerTitleStyle: {
    //   fontFamily:'Cormorant-Italic',
       fontSize: 20,
      },
      headerTitleAlign: 'center',
    }}
   />
  
  <Stack.Screen name="LoginScreen" component={LoginScreen}
   options={{
    title: 'Details' ,
    headerTitleStyle: {
    // fontFamily:'Cormorant-Italic',
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
