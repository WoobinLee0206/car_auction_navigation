import React from "react";
import { View } from "react-native";
import IconPractice from "./practices/IconPractice";
import LoginScreen from "./screens/LoginScreen";
import SampleHomeScreen from "./screens/SampleHomeScreen";
import SampleDatailScreen from "./screens/SampleDetailScreen";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator(
  {
    SampleHome: SampleHomeScreen,
    SampleDatails: SampleDatailScreen,
  },
  {
    initialRouteName: "SampleHome",
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
