import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import BodyText from "./src/elements/BodyText";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appber}>
          <View>
            <Text style={styles.appberTitle}>MEMOT</Text>
          </View>
        </View>

        {/* <View style={styles.memoList}>
          <View style={style.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019.2.3</Text>
          </View>
        </View>

        <View>+</View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  appber: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    width: "100%",
    height: 100,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  appberTitle: {
    color: "white",
    fontSize: 18
  }
});
