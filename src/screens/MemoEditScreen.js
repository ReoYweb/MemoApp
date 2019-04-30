import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AddButton from "../elements/AddButton";

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoEditInput}>
          <Text>Hi!</Text>
        </View>
        <AddButton>{"\uf00c"}</AddButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
});

export default MemoEditScreen;
