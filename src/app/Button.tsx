import { Pressable, StyleSheet, Text } from "react-native";
type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function Button({ title, onPress, disabled }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
});
