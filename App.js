import React from 'react'
import {View, Text , FlatList , StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Home from './components/home';
import ScrollView from './components/scrollview';
import flatlist from './components/Flat_List';
import Form from './components/form'



function App () {

    return (
         <NavigationContainer>
             <Stack.Navigator>
                 <Stack.Screen name = 'Home' component = {Home}/>
                 <Stack.Screen name = 'ScrollView' component = {ScrollView}/>
                 <Stack.Screen name = 'FlatList' component = {flatlist}/>
                 <Stack.Screen name = 'Form' component = {Form}/>
                
             </Stack.Navigator>
        </NavigationContainer>
        
    )
}
export default App

