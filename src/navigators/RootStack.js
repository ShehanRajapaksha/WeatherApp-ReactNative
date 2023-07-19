import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../../src/screens/Login"
import SignUp from "../../src/screens/SignUp"
import Welcome from "../../src/screens/Welcome"

import Tabs from '../components/Tabs';




const Stack = createNativeStackNavigator()

const RootStack = ({weather}) => {
   
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerBackVisible:false,
                    headerTitle: '',
                    headerTransparent:true,
                    headerLeftContainerStyle:{
                        paddingLeft:20
                    },
                   
                }}
                initialRouteName='Login'
            >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='Tabs'   > 
                        {()=><Tabs  weather={weather}/>}
                </Stack.Screen>
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack