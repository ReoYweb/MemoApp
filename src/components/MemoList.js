import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("MemoDetailScreen");
          }}
        >
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019.2.3</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("MemoDetailScreen");
          }}
        >
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019.2.3</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("MemoDetailScreen");
          }}
        >
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019.2.3</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

export default MemoList;
