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

        <AddButton color="white" style={styles.editButton}>
          {"\uf303"}
        </AddButton>
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
    backgroundColor: "#005701",
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
  },
  memoContent: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  editButton: {
    top: 75,
    fontSize: 14
  }
});

export default MemoDetailScreen;
