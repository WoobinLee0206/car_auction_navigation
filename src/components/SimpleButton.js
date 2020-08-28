import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function SimpleButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onpress}
      style={[styles.buttonWrap, props.style, { backgroundColor: props.color }]}
    >
      <Text style={[styles.text, { color: props.textColor }]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

SimpleButton.defaultProps = {
  title: "",
  color: "gray",
  textColor: "white",
  onPress: () => {},
};

const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
