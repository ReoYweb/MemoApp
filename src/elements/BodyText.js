import React from "react";
import { StyleSheet, View, Text } from "react-native";

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={Styles.text}>Hello!</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  text: {
    color: "#DDD",
    backgroundColor: "#eee"
  }
});

export default BodyText;
