import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [greetings, setGreetings] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world</Text>
      <Text style={styles.subtitle}>Learning React Native</Text>

      <TextInput
        style={styles.input}
        onChangeText={(value) => setText(value)}
        value={text}
        placeholder="Enter your name"
      />
      {greetings && <Text>Hello {text}</Text>}

      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Press ME</Text>
      </Pressable>
      <Pressable onPress={() => setGreetings(true)} style={styles.button}>
        <Text style={styles.buttonText}>Show Greetings</Text>
      </Pressable>
      <Text>You pressed the button {count} times</Text>
      <Pressable
        onPress={() => {
          setGreetings(false);
          setText("");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
  button: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: "black",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    width: 250,
    height: 50,
    padding: 19,
    borderColor: "black",
    borderWidth: 1,
  },
});
