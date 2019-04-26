import React from "react";
import { StyleSheet, View, Text } from "react-native";

class AddButton extends React.Component {
  render() {
    const { style, color } = this.props;

    let bgColor = "#E31676";
    let textColor = "#fff";

    if (color === "white") {
      bgColor = "#fff";
      textColor = "#E31676";
    }

    return (
      <View style={[styles.memoAddButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.memoAddButtonTitle, { color: textColor }]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoAddButton: {
    position: "absolute",
    bottom: 18,
    right: 18,
    backgroundColor: "#E31676",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  memoAddButtonTitle: {
    fontSize: 30,
    color: "white",
    lineHeight: 30
  }
});

export default AddButton;
