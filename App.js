import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "./src/components/AppBar";
import MemoListScreen from "./src/screens/MemoListScreen";

// import BodyText from "./src/elements/BodyText";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoListScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    backgroundColor: "#FFFDF6"
  }
});

// メモ Viewタグにはテキストのスタイルが当てられない
// shadowはプロパティが違う
