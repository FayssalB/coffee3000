import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Home from './Home';
import CoffeeItem from './CoffeeItem';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator screenOptions={{
            headerTintColor:"orange",
            headerStyle:{
                backgroundColor:"#222222"
            }
        }}>
            <Stack.Screen name='Acceuil' component={Home}/>
            <Stack.Screen name='CoffeeItem' component={CoffeeItem} options={{title: "Détail du café" }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App