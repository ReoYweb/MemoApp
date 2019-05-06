import React from "react";
import { StyleSheet, View } from "react-native";

import MemoList from "../components/MemoList";
import AddButton from "../elements/AddButton";

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <AddButton
          onPress={() => {
            this.props.navigation.navigate("MemoEditScreen");
          }}
        >
          {"\uf067"}
        </AddButton>
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

export default MemoListScreen;
