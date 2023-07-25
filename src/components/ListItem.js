import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { WeatherType } from "../utilities/WeatherType";
import moment from "moment";

const ListItem = (props) => {
  const { dt_txt, min, max, condition, tempnow, isMainItem } = props;
  const { date, item, tempContainer, tempNow, tempMinMax, iconContainer,tempNowMain,tempMinMaxMain } = styles;

  if (isMainItem) {
    return (
      <View style={styles.firstItem}>
        <View style={iconContainer}>
        <Feather name={WeatherType[condition]?.icon} size={80} color={"white"} />
        </View>
        <View style={styles.firstTempContainer}>
        <Text style={tempNowMain}>{`${tempnow.toFixed(1)}°`}</Text>
        <Text style={tempMinMaxMain}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
      </View>

      </View>
    );
  }

  return (
    <View style={item}>
      <View style={iconContainer}>
        <Feather name={WeatherType[condition]?.icon} size={50} color={"white"} />
      </View>
      <View style={styles.dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <View style={tempContainer}>
        <Text style={tempNow}>{`${tempnow.toFixed(1)}°`}</Text>
        <Text style={tempMinMax}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  mainItem: {
    flexDirection: "column",
    alignItems: "center",
  },
  tempContainer: {
    alignItems: "flex-end",
    marginLeft: 120,
  },
  tempNow: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    
  },
  tempMinMax: {
    color: "white",
    fontSize: 16,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  iconContainer: {
    marginRight: 16,
  },
  firstItem:{
    flex:1,
    padding:30,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  firstTempContainer:{
    padding:10,
  },
  tempNowMain:{
    color: "white",
    fontSize: 38,
    fontWeight: "bold",

  },
  tempMinMaxMain:{
    color: "white",
    fontSize: 20,
    paddingLeft:6
  },
  
});

export default ListItem;
