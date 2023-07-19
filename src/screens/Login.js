/* eslint-disable no-undef */
import React,{useState} from "react";
import { Formik } from "formik";
import { 
    StyledContainer,
    InnerContainer,
    PageTitle,
    Background,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledButton,
    colors,
    StyledTextInput,
    FormContainer,
    ButtonText,
    Ruler,
    GoogleButton,
    GoogleText,
    GoogleIcon,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
    } from "../components/styles";

import { View } from "react-native";
import {Octicons,Ionicons} from '@expo/vector-icons'

const {darkLight,icongrey} = colors

const Login = ({navigation})=>{

    const [hidePassword,setHidePassword]=useState(true)
    return(
        <Background
            source={require('../../assets/login-wallpaper.jpg')}
            resizeMode='cover'
        >
        <StyledContainer>
            <InnerContainer>
                 <PageTitle> Weather </PageTitle>
                 <FormContainer>
                 <Formik
                    initialValues={{email:'',password:''}}
                    onSubmit={()=>{navigation.navigate('Tabs',{screen:"Current"})}}
                 >
                 {({handleChange,handleBlur,handleSubmit,values})=>(<StyledFormArea>
                        <MytextInput
                            label={"E-mail address"}
                            icon={'mail'}
                            placeholder={'andyj@gmail.com'}
                            placeholderTextColor ={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboard-type='email-address'
                        />

                        <MytextInput
                            label={"Password"}
                            icon={'lock'}
                            placeholder={'********'}
                            placeholderTextColor ={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('email')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            isPassword={true}
                        />
                        {/* <MessageBox>...</MessageBox> */} 

                        
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Log In
                            </ButtonText>
                        </StyledButton>
                        
                       <View><Ruler/></View>    
                       <GoogleButton>
                            <GoogleIcon source={require('../../assets/Googleicon.png')}/>
                          
                            <GoogleText>Sign in With Google</GoogleText>
                       </GoogleButton> 
                        
                        <ExtraView>
                            <ExtraText> Don't have an account? </ExtraText>
                            <TextLink onPress={()=>navigation.navigate('SignUp')}>
                                <TextLinkContent>SignUp</TextLinkContent>
                            </TextLink>
                         
                        </ExtraView>
                        
                        
                    </StyledFormArea>)}

                 </Formik>
                 </FormContainer>
             
            </InnerContainer>
        </StyledContainer>
  
        </Background>
    )
}



const MytextInput= ({label,icon,isPassword,hidePassword,setHidePassword,...props})=>{
    return(
        <View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={icongrey}/>
        </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput{...props}/>
            {isPassword &&(
                <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                    <Ionicons name ={hidePassword ? 'md-eye-off':'md-eye'}size={30} color={icongrey}/>
                </RightIcon>
            )}
        
        </View>
    )
}



export default Login

