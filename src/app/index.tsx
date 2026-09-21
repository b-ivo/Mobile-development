import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Pressable  style={styles.button} onPress={() => setCount(count+1)}> 
        <Text style={styles.buttonText}>Increase</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setCount(count-1)}>
        <Text style={styles.buttonText}>Decrease</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setCount(0)}>
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
