import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
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
    const { style, color, onPress } = this.props;

    let bgColor = "#E31676";
    let textColor = "#fff";

    if (color === "white") {
      bgColor = "#fff";
      textColor = "#E31676";
    }

    return (
      <TouchableHighlight
        style={[styles.container, style]}
        onPress={onPress}
        underlayColor="transparent"
      >
        <View style={[styles.memoAddButton, { backgroundColor: bgColor }]}>
          {this.state.fontLoaded ? (
            <Text style={[styles.memoAddButtonTitle, { color: textColor }]}>
              {this.props.children}
            </Text>
          ) : null}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 18,
    right: 18,
    width: 50,
    height: 50
  },
  memoAddButton: {
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
