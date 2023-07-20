import React from "react";
import { SafeAreaView, StyleSheet, FlatList, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ListItem from "../components/ListItem";

const UpComingWeather = ({ weatherData }) => {
  const renderItem = ({ item, index }) => {
    // Check if it's the first item in the list
    if (index === 0) {
      return (
        <ListItem
          condition={item.weather[0].main}
          dt_txt={item.dt_txt}
          tempnow={item.main.temp}
          min={item.main.temp_min} 
          max={item.main.temp_max}
          isMainItem // Add a custom prop to identify the main item
        />
      );
    } else {
      return (
        <ListItem
          condition={item.weather[0].main}
          dt_txt={item.dt_txt}
          min={item.main.temp_min}
          max={item.main.temp_max}
          tempnow={item.main.temp}
        />
      );
    }
  };

  return (
    <LinearGradient
      colors={["#5B8BDF", "#00CCE5"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.container}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
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
});

export default UpComingWeather;
