/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

import  Constants  from "expo-constants";


const StatusBarHeight= Constants.statusBarHeight;

//colors
export const colors ={
    primary:'#ffffff', //white
    secondary:'#2c64c6', //darkblue
    terniary:'#00cce5', //lightest blue
    brand:'#4285F4', //lightblue
    darkLight:'#363636', //black
    grey:'#E4DDDD',
    icongrey:'#8D8787'

}

const{primary,secondary,terniary,brand,darkLight,grey,icongrey}= colors

export const StyledContainer =styled.SafeAreaView`
    flex:1;
    padding:25px;
    padding-top:${StatusBarHeight+10}px;
   


`
export const InnerContainer = styled.View`
    flex:1;
    margin-top:50px;
    width:100%;
    align-items:center;
    ${(props)=>props.signup&&`
       margin-top:0px;
    `}

`

export const WelcomeContainer=styled(InnerContainer)`
    padding:25px;
    padding-top:10px;
    justify-content:center;
    align-items:center;
    flex:1;
    margin-top:0px;

`

export const Avatar=styled.Image`
    width:100px;
    height:100px;
    margin:auto;
    border-radius:50px;
    border-width:2px;
    border-color:${secondary};
    margin-bottom:10px;
    margin-top:10px;

`
export const WelcomeImage=styled.Image`
    height:50%;
    min-width:100%;

`
export const FormContainer=styled.View`
    flex:1;
    margin-top:50px;
    width:100%;
    align-items:center;

`
export const Background = styled.ImageBackground`
    flex:1;
    align-items:center;
    justify-content:center;

`
export const PageTitle = styled.Text`
    font-size:43px;
    text-align:center;
    font-weight: bold;
    color:${primary};
    padding-top:100px;
    ${'' /* text-shadow: -1px -1px 0 #000; */}

    ${(props)=>props.welcome&&`
        font-size:50px;
        padding-top:0px;
    `}

`
export const SubTitle = styled.Text`
    font-size:16px;
    margin-top:20px;
    justify-content:center;
    text-align:center;
    margin-bottom:20px;
    letter-spacing:1px;
    font-weight:bold;
    color:${grey};

    ${(props)=>props.welcome&&`
        margin-bottom:5px;
        font-weight:normal;
    `}

`

export const StyledFormArea = styled.View`
    width:90%;

`
export const StyledTextInput = styled.TextInput`
    background-color:${grey};
    padding:15px;
    padding-left:100px;
    padding-right:100px;
    border-radius:20px;
    font-size:16px;
    height:50px;
    margin-vertical:3px;
    margin-bottom:10px;
    color:${terniary};
    width:100%;

`

export const StyledInputLabel= styled.Text`
    color:${primary};
    font-size:15px;
    padding-left:5px;
    text-align:left;


`

export const LeftIcon =styled.View`
    left:15px;
    top:28px;
    position:absolute;
    z-index:1;
`

export const RightIcon =styled.TouchableOpacity`
    right:15px;
    top:28px;
    position:absolute;
    z-index:1;
`

export const StyledButton=styled.TouchableOpacity`
    padding:15px;
   
    background-color:${brand};
    justify-content:center;
    border-radius:25px;
    margin-vertical:5px;
    height:60px;
    align-items:center;

`

export const ButtonText =styled.Text`
    color:${primary};
    font-size:20px;
    font-weight:bold;
`
export const MessageBox =styled.Text`
    text-align:center;
    font-size:13px;
`

export const Ruler = styled.View`
    height:1px;
    width:100%;
    background-color:${icongrey};
    margin-vertical:10px;
`

export const GoogleButton = styled.TouchableOpacity`
    background-color: ${primary};
    border-radius: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    margin: 10px;
    border: none;
    cursor: pointer;
    margin-top:20px;
`
export const GoogleText =styled.Text`
    color:#555555;
    font-size:20px;
    font-family:'Roboto';
`    
export const GoogleIcon = styled.Image`
    width: 25px;
    height: 25px;
    margin-right: 10px;
    left:15px;
    top:8px;
    position:absolute;
    z-index:1;
`

export const ExtraView = styled.View`
    justify-content:center;
    flex-direction:row;
    align-items:center;
    padding:10px;
    margin-top:120px;

    ${(props)=>props.SignUp ==true &&`
    margin-top:10px`}

`
export const ExtraText=styled.Text`
    justify-content:center;
    align-content:center;
    font-size:18px;
`
export const TextLink=styled.TouchableOpacity`
    justify-content:center;
    align-items:center;


`

export  const TextLinkContent=styled.Text`
    color:${secondary};
    font-size:18px;
`