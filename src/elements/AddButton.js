import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Font } from "expo";
import fontAwsome from "../../assets/fonts/fa-solid-900.ttf";

class AddButton extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;

    let bgColor = "#E31676";
    let textColor = "#fff";

    if (color === "white") {
      bgColor = "#fff";
      textColor = "#E31676";
    }

    return (
      <View style={[styles.memoAddButton, style, { backgroundColor: bgColor }]}>
        {this.state.fontLoaded ? (
          <Text style={[styles.memoAddButtonTitle, { color: textColor }]}>
            {this.props.children}
          </Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoAddButton: {
    position: "absolute",
    bottom: 18,
    right: 18,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  memoAddButtonTitle: {
    fontFamily: "FontAwsome",
    fontSize: 24,
    lineHeight: 24
  }
});

export default AddButton;
