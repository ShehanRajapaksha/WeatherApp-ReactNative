import React from "react";
import { View, Text, StyleSheet,  TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import { Ionicons,FontAwesome,Feather } from '@expo/vector-icons';
import { colors } from "../components/styles";
import { LinearGradient } from "expo-linear-gradient";

const { primary, secondary, terniary, brand, darkLight, grey, icongrey } = colors;

const SettingsPage = () => {

  const {
    container,
    profileWrapper,
    profileIcon,
    usernameText,
    menuItem,
    menuItemText,
    menuIcon,
  } = styles;

  return (
    <LinearGradient
      colors={["#5B8BDF", "#00CCE5"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}
    >
    <SafeAreaView style={container}>
 
        <View style={profileWrapper}>
          <TouchableOpacity style={profileIcon}>
            <FontAwesome name="user-circle-o" size={100} color={darkLight} />
          </TouchableOpacity>
          <Text style={usernameText}>John Doe</Text>
        </View>

        <TouchableOpacity style={menuItem}>
            <View style={menuIcon}>
                <Ionicons name="settings-outline" size={24} color="white" />
            </View>
            <Text style={menuItemText}>Account Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={menuItem}>
            <View style={menuIcon}>
            <FontAwesome name="location-arrow" size={24} color="white" />
            </View>
          <Text style={menuItemText}>Location Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={menuItem}>
            <View style={menuIcon}>
                <Feather name="shield" size={24} color="white" />
            </View>
          <Text style={menuItemText}>Privacy Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={menuItem}>
            <View style={menuIcon}>
            <Feather name="help-circle" size={24} color="white" />
            </View>
          <Text style={menuItemText}>Help & Support</Text>
        </TouchableOpacity>

   </SafeAreaView>
   </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileWrapper: {
    alignItems:'center',
    marginBottom: 80,
    paddingTop:50

  },
  menuIcon:{
        marginRight:20,
  },
  usernameText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: primary,
    marginTop: 15,
  },
  menuItem: {
  
    backgroundColor:'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
   
    borderRadius: 10,
    paddingVertical: 15,
   
    paddingHorizontal: 100,
    marginBottom: 10,
    alignSelf: 'stretch',

    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 18,
    color: primary,
    textAlign:'left'
   
  },
  profileIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 110, // Adjust the width and height as needed
    height: 110, // Adjust the width and height as needed
    borderRadius: 55, // Make it half of the width/height to create a circle
    backgroundColor: "white", // White background for the circle
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20, // Adjust spacing as needed
  },
});

export default SettingsPage;
