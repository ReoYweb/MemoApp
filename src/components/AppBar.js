import React from "react";
import { StyleSheet, View, Text } from "react-native";

class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.appber}>
        <View>
          <Text style={styles.appberTitle}>MEMOT</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appber: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#00B902",
    width: "100%",
    height: 60,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  appberTitle: {
    color: "white",
    fontSize: 18,
    lineHeight: 18
  }
});

export default AppBar;
