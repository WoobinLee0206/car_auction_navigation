import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import SampleDetailScreen from "./SampleDetailScreen";

export default class SampleHomeScreen extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 50,
            color: "red",
            marginTop: 5,
            textAlign: "center",
          }}
        >
          홈스크린
        </Text>
        <TouchableOpacity
          onPress={(e) => {
            this.props.navigation.navigate("SampleDatails");
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: "green",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            디테일 가기!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SampleHomeScreen.navigationOptions = {
  // tabBarLabel: "홈",
  tabBarLabel: () => {
    return (
      <Text
        style={{
          marginBottom: 10,
          fontSize: 30,
          color: "blue",
          textAlign: "center",
        }}
      >
        Home
      </Text>
    );
  },
};
SampleDetailScreen.navigationOptions = {
  // tabBarLabel: "홈",
  tabBarLabel: () => {
    return (
      <Text
        style={{
          marginBottom: 10,
          fontSize: 30,
          color: "blue",
          textAlign: "center",
        }}
      >
        SampleDatails
      </Text>
    );
  },
};
