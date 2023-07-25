/* eslint-disable react/prop-types */
import React from "react"
import { View, Text , SafeAreaView, StyleSheet } from "react-native"
import {Feather,Ionicons} from '@expo/vector-icons'
import RowText from "../components/rowText"
import { WeatherType } from "../utilities/WeatherType"
import { Video } from 'expo-av';
import { colors } from "../components/styles"

const{primary,secondary,terniary,brand,darkLight,grey,icongrey}= colors

const CurrentWeather = ({weatherData,cityData}) => {
 
  const{main:{temp,feels_like,temp_max,temp_min},weather} =weatherData 
  const {name}=cityData
  const weatherCondition = weather[0]?.main
  const background = WeatherType[weatherCondition]?.background
  return (
    
    <SafeAreaView style={[styles.wrapper]}>
     <Video
        source={background} // Replace with your video file path
        shouldPlay
        isLooping
        isMuted={true}
        resizeMode="cover"
        style={styles.video}
      />
      <View style={styles.heading}>
      <Ionicons name="ios-location-outline" size={40} color="white" />
       <Text style={styles.header}>{name}</Text> 
      </View>
      <View style={styles.container}>
     
        <Feather name={WeatherType[weatherCondition]?.icon} size={100} color="white"/>
        <Text style={styles.temp}> {`${temp}°`}</Text>
        <Text style={styles.feels}> {`Feels like : ${feels_like}°`}</Text>
          <RowText messageOne={`High:${temp_max}°`} messageTwo={` Low:${temp_min}°`} containerStyles={styles.highLowWrapper} messageOneStyles={styles.highLow} messageTwoStyles={styles.highLow}/>
         
        </View>
        <View style={styles.bottomText}>

        <RowText messageOne={weather[0]?.description} messageTwo={WeatherType[weatherCondition]?.message} containerStyles={styles.bodyWrapper} messageOneStyles={styles.description} messageTwoStyles={styles.message}/>
        </View>
      
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  container:{
    justifyContent:'center',
    flex: 1,
    alignItems: 'center',

  },
  wrapper:{
    flex:1,   
  },
  heading:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  header:{
    color:'white',
    fontSize:35,
    // fontFamily:"Trebuchet MS",
    fontWeight:'600'
  },
  temp:{
    color:'black',
    fontSize:48
  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highLow:{
    color:'black',
    fontSize:20
  },
  highLowWrapper:{
    flexDirection:'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft: 25,
    marginBottom:40,
  
  },
  description:{
    fontSize:40,
    color:darkLight

  },
  message:{
    fontSize:25,
    color: darkLight
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bottomText:{
    marginBottom:30
  }
})
export default CurrentWeather