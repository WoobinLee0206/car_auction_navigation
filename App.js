// import React from "react";
// import { View } from "react-native";
// import IconPractice from "./practices/IconPractice";
// import LoginScreen from "./screens/LoginScreen";
import SampleHomeScreen from "./src/screens/SampleHomeScreen";
import SampleDatailScreen from "./src/screens/SampleDetailScreen";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { createBottomTabNavigator } from "react-navigation-tabs";
import SampleDetailScreen from "./src/screens/SampleDetailScreen";

import DefaultScreen from "./src/screens/DefaultScreen";
import LoginScreen from "./src/screens/LoginScreen";
import CarListScreen from "./src/screens/CarListScreen";

const carStackNavigator = createStackNavigator(
  {
    CarList: CarListScreen,
    carDetail: DefaultScreen,
  },
  {
    initialRouteName: "CarList",
  }
);
const settingNavigator = createStackNavigator(
  {
    SettingList: DefaultScreen,
    EditInfo: DefaultScreen,
  },
  {
    initialRouteName: "SettingList",
  }
);

const tabNavigator = createBottomTabNavigator(
  {
    Car: carStackNavigator,
    Setting: settingNavigator,
  },
  {
    initialRouteName: "Car",
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Main: tabNavigator,
    Login: LoginScreen,
  },
  {
    initialRouteName: "Main",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

// const AppNavigator = createBottomTabNavigator(
//   {
//     SampleHome: SampleHomeScreen,
//     SampleDetails: SampleDetailScreen,
//   },
//   {
//     initialRouteName: "SampleHome",
//   }
// );

// const AppNavigator = createStackNavigator(
//   {
//     SampleHome: SampleHomeScreen,
//     SampleDatails: SampleDatailScreen,
//   },
//   {
//     initialRouteName: "SampleHome",
//   }
// );
