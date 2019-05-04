import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import AddButton from "../elements/AddButton";

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        <AddButton>{"\uf00c"}</AddButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  memoEditInput: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16
  }
});

export default MemoEditScreen;
