import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class SampleDetailScreen extends Component {
  constructor(props) {
    super(props);

    let pageId = props.navigation.getParam("pageId");
    if (!pageId) {
      pageId = 1;
    }
    this.state = {
      pageId: pageId,
    };
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, marginBottom: 5, textAlign: "center" }}>
          상세스크린! {this.state.pageId}
        </Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push("SampleDatails", {
              pageId: this.state.pageId + 1,
            })
          }
        >
          <Text
            style={{
              fontSize: 20,
              color: "blue",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            디테일의 디테일 가기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text
            style={{
              fontSize: 20,
              color: "yellow",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            뒤로 가기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.popToTop()}>
          <Text
            style={{
              fontSize: 20,
              color: "red",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            처음으로 가기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SampleDetails")}
        >
          <Text
            style={{
              fontSize: 20,
              color: "orange",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            디테일 가기
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
