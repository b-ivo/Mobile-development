import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./Button";

export default function HomeScreen() {
  const [items, setItems] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const addItem = () => {
    if (text.trim() === "") return;
    setItems([...items, text.trim()]);
    setText("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter The Item.."
        style={styles.input}
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Button title="Add" onPress={addItem} />
      {items.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  preview: {
    marginTop: 15,
    fontSize: 16,
    color: "#333",
  },
});
