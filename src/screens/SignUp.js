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
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
    } from "../components/styles";

import { View,TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker'
import {Octicons,Ionicons} from '@expo/vector-icons'
import KeyBoardAvoidngWrapper from "../components/KeyBoardAvoidingWrapper";

const {darkLight,icongrey} = colors

const SignUp = ()=>{
    const [hidePassword,setHidePassword]=useState(true)
    const [show,setShow] = useState(false)
    const [date, setDate] = useState(new Date(2000,0,1))
   
    //Actual DOB to be sent
    const [dob,setDob]=useState()
    const onChange = (event,selectedDate) =>{
        const currentDate = selectedDate|| date
        setShow(false)
        setDate(currentDate)
        setDob(currentDate)
    }

    const showDatePicker=()=>{
        setShow(true)

    }
    return(
        <Background
            source={require('../../assets/login-wallpaper.jpg')}
            resizeMode='cover'
        >
        <KeyBoardAvoidngWrapper>
        <StyledContainer>
            <InnerContainer signup={true}>
                {
                    show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode='date'
                            is24Hour={true}
                            display="default"
                            onChange={onChange}

                        />
                    )
                }
                 <PageTitle> Weather </PageTitle>
                 <FormContainer>
                 <Formik
                    initialValues={{fullName:'',email:'', dateofBirth:'',password:'',confirmpassword:''}}
                    onSubmit={{}}
                 >
                 {({handleChange,handleBlur,handleSubmit,values})=>(<StyledFormArea>
                        <MytextInput
                            label={"Full Name"}
                            icon={'person'}
                            placeholder={'Enter Name'}
                            placeholderTextColor ={darkLight}
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
            
                        />

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
                            label={"Date of Birth"}
                            icon={'calendar'}
                            placeholder={'YYYY - MM - DD'}
                            placeholderTextColor ={darkLight}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={dob? dob.toDateString():''}
                            editable={false}
                            isDate={true}
                            showDatePicker={showDatePicker}
                        />
                        

                        <MytextInput
                            label={"Password"}
                            icon={'lock'}
                            placeholder={'********'}
                            placeholderTextColor ={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            isPassword={true}
                        />

                        <MytextInput
                            label={"Confirm Password"}
                            icon={'lock'}
                            placeholder={'********'}
                            placeholderTextColor ={darkLight}
                            onChangeText={handleChange('confirmpassword')}
                            onBlur={handleBlur('confirmpassword')}
                            value={values.confirmpassword}
                            secureTextEntry={hidePassword}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            isPassword={true}
                        />
                   

                        <Ruler></Ruler>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Sign Up
                            </ButtonText>
                        </StyledButton>
                        
                  
                        
                        <ExtraView SignUp={true}>
                            <ExtraText > Already Have a Account? </ExtraText>
                            <TextLink onPress={()=>navigation.navigate('Login')}>
                                <TextLinkContent>Login</TextLinkContent>
                            </TextLink>
                         
                        </ExtraView>
                        
                        
                    </StyledFormArea>)}

                 </Formik>
                 </FormContainer>
             
            </InnerContainer>
        </StyledContainer>
        </KeyBoardAvoidngWrapper>
        </Background>
    )
}



const MytextInput= ({label,icon,isPassword,hidePassword,setHidePassword,isDate,showDatePicker,...props})=>{
    return(
        <View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={icongrey}/>
        </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate &&(<StyledTextInput {...props}/>)}
            {isDate && (<TouchableOpacity onPress={showDatePicker}>
                        <StyledTextInput {...props}/>
                    </TouchableOpacity>)}
            {isPassword &&(
                <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                    <Ionicons name ={hidePassword ? 'md-eye-off':'md-eye'}size={30} color={icongrey}/>
                </RightIcon>
            )}
        
        </View>
    )
}



export default SignUp

