import React from "react";
import { View } from "react-native";

import MemoList from "../src/components/MemoList";
import AddButton from "../src/elements/AddButton";

class MemoListScreen extends React.Component {
  render() {
    return (
      <View>
        <MemoList />
        <AddButton>+</AddButton>
      </View>
    );
  }
}

export default MemoListScreen;
