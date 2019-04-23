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

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019.2.3</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019.2.3</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019.2.3</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019.2.3</Text>
          </View>
        </View>

        <View style={styles.memoAddButton}>
          <Text style={styles.memoAddButtonTitle}>+</Text>
        </View>
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
  },
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
  },
  memoList: {
    width: "100%",
    flex: 1,
    backgroundColor: "#FFF"
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 10
  },
  memoDate: {
    fontSize: 12,
    color: "#a2a2a2"
  },
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

// メモ Viewタグにはテキストのスタイルが当てられない
// shadowはプロパティが違う
