import React from "react";
import { StyleSheet, View, Text } from "react-native";

class AddButton extends React.Component {
  render() {
    return (
      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTitle}>+</Text>
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
