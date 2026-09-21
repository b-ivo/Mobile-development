import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <Button
        title="Increase"
        onPress={() => {
          if (count < 10) {
            setCount(count + 1);
          }
        }}
        disabled={count === 10}
      />
      <Button
        title="Decrease"
        onPress={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        disabled={count === 0}
      />
      <Button title="Reset" onPress={() => setCount(0)} />

      {count === 0 ? (
        <Text>Counter is empty</Text>
      ) : count === 10 ? (
        <Text>Maximum reached</Text>
      ) : (
        <Text>Keep going</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    fontSize: 60,
    fontWeight: "bold",
  },
});
