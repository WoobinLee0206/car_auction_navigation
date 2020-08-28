import React from "react";
import {
  Ionicons,
  MaterialIcons,
  EvilIcons,
  AntDesign,
} from "@expo/vector-icons";

import { View } from "react-native";

export default function IconPractice(props) {
  return (
    <View>
      <View>
        <Ionicons name="ios-person" size={100} color="gray" />
      </View>
      <View>
        <MaterialIcons name="3d-rotation" size={100} color="gray" />
      </View>
      <View>
        <EvilIcons name="bell" size={100} color="gray" />
      </View>
      <View>
        <AntDesign name="bars" size={100} color="gray" />
      </View>
    </View>
  );
}
