/* eslint-disable react/prop-types */
import React from "react"

import CurrentWeather from "../screens/CurrentWeather"
import UpComingWeather from '../screens/UpComingWeather'
import City from '../screens/City'



import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather })=>{
    return(
        <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor:'grey',
        headerShown:false,
        headerStyle:{
            backgroundColor:'#556B2F',
        },
        tabBarStyle:{
          borderTopColor:'transparent',
          backgroundColor:'transparent',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          
        },
        tabBarLabelStyle:{
          color:'white'
        }
      }}
  
      >
      <Tab.Screen name={'Current'} options={{
        tabBarIcon:({focused})=> (<Feather name={'droplet'} size={25} color={focused ? 'tomato':'white'}/>),
        
      }} 
      >
        {()=><CurrentWeather weatherData={weather.list[0]}/>}
      </Tab.Screen>
      
      <Tab.Screen name={'UpComing'}  options={{
        tabBarIcon:({focused}) =>(<Feather name={'clock'} size={25} color={focused ? 'tomato':'white'}/>)
      }}        
      >
        {()=><UpComingWeather weatherData={weather.list}/>}
      </Tab.Screen>

      <Tab.Screen name={'City'} options={{
        tabBarIcon:({focused}) =>(<Feather name={'home'} size={25} color={focused ? 'tomato':'white'}/>)
      }}        
      >
        {()=><City weatherData={weather.city}/>}
      </Tab.Screen>
      
    
      
    </Tab.Navigator>

    )
}

export default Tabs