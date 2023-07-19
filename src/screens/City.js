
import React from "react"
import { SafeAreaView,Text,StyleSheet,ImageBackground, StatusBar, View } from "react-native"

import IconText from "../components/IconText"
import moment from "moment"
const City = (weatherData)=> {
    const { name,country,population,sunrise,sunset}=weatherData
    const {container,cityName,cityText,countryName,populationText,populationWrapper,riseSetText,riseSetWrapper}=styles
    return(
        <SafeAreaView style={container}>
        <ImageBackground
            source={require('../../assets/city-background.jpg')}
            style={styles.imageLayout}>


        
            <Text style={[cityName,cityText]}>{name}</Text>
            <Text style={[countryName,cityText]}>{country}</Text>
            <View style={[populationWrapper, styles.rowLayout]} >
                <IconText iconName={'user'} iconColor={'red'} bodyText={`Population:${population}`} bodyTextStyles={populationText}/>
            </View>
            
            <View style={[riseSetWrapper, styles.rowLayout]}>
                <IconText iconName={'sunrise'} iconColor={'white'} bodyText={moment(sunrise).format('h:mm:s a')} bodyTextStyles={riseSetText}/>
                <IconText iconName={'sunset'} iconColor={'white'} bodyText={moment(sunset).format('h:mm:s a')} bodyTextStyles={riseSetText}/>
            </View>
            
        </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0
    },
    imageLayout:{
        flex:1
    },
    cityName:{
        fontSize:40,
        
    },
    countryName:{
        fontSize:30,
        
    },
    cityText:{
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        color:'white',
        
    },
    populationText:{
        marginLeft:7.5,
        fontSize:25,
        color:'red'

    },
    populationWrapper:{
        justifyContent:'center',
        marginTop:30
    },  
    riseSetWrapper:{
        justifyContent:'space-around',
        marginTop:30


    },
    riseSetText:{
        fontSize:20,
        color:'white',
   
    },
    rowLayout:{
        flexDirection:'row',
        alignItems:'center'
    }
})
export default City