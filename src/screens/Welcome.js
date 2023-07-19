/* eslint-disable no-undef */
import React from "react";

import { 

    InnerContainer,
    PageTitle,
    Background,
    StyledButton,
    colors,
    ButtonText,
    Ruler,
    WelcomeContainer,
    WelcomeImage,
    StyledFormArea,
    SubTitle,
    ExtraView
    } from "../components/styles";

import { View } from "react-native";


const {darkLight,icongrey} = colors

const Welcome = ()=>{

    return(
        <Background
            source={require('../../assets/login-wallpaper.jpg')}
            resizeMode='cover'
        >
            <WelcomeContainer>
           
                 <PageTitle welcome={true} style={{marginTop:180}}> Weather </PageTitle>
               
            </WelcomeContainer>
            <View style={{ marginBottom:50 ,padding:25, width:'90%' }}>
                 <SubTitle welcome={true}>Shehen Rajapaksha</SubTitle>
                 <SubTitle welcome={true}>shehan.rajapaksha2002@gmail.com</SubTitle>
                 
                    <StyledFormArea style={{paddingLeft:10}}>
                    <View><Ruler/></View>  
                        <StyledButton onPress={()=>navigation.navigate('Login')}>
                            <ButtonText>
                                Log Out
                            </ButtonText>
                        </StyledButton>
                        
                      
                   
                    </StyledFormArea>
                </View>
        </Background>
    )
}







export default Welcome

