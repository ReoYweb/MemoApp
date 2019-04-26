import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "./src/components/AppBar";
// import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";

// import BodyText from "./src/elements/BodyText";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoDetailScreen />
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
// エキスポでfontawsomeを使うときは独自の記述が必要でエキスポのサイトでcustomefontで検索をかけると使い方を確認できる
