import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Text
} from "react-native";

class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput style={styles.input} value="email" />
        <TextInput style={styles.input} value="password" />
        <TouchableHighlight
          style={styles.button}
          onPress={() => {}}
          underlayColor="#C70f66"
        >
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 24,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 24
  },
  input: {
    backgroundColor: "#eee",
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8
  },
  button: {
    backgroundColor: "#E31676",
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "70%"
  },
  buttonTitle: {
    color: "#FFF",
    fontSize: 18
  }
});

export default SignupScreen;
