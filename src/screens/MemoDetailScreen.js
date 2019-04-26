import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AddButton from "../elements/AddButton";

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>講座のタイトル</Text>
              <Text style={styles.memoHeaderDate}>2019</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>講座のアイデアです</Text>
        </View>

        <AddButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  memoHeader: {
    height: 100,
    backgroundColor: "#DDD",
    justifyContent: "center",
    padding: 10
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 4
  },
  memoHeaderDate: {
    fontSize: 12,
    color: "#fff"
  }
});

export default MemoDetailScreen;
