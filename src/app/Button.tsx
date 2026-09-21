import { Pressable, Text, StyleSheet } from "react-native";
type ButtonProps = {
    title: string,
    onPress: () => void,
    disabled?: boolean
}

export default function Button ({ title, onPress, disabled }: ButtonProps ) {
    
    return(
        <Pressable onPress={onPress} disabled={disabled} style={({ pressed }) => [
            styles.button,
            pressed && {opacity: 0.5},
            disabled && {opacity: 0.3}
        ]}>
            <Text style={styles.buttonText}>{ title }</Text>
        </Pressable>
    )   
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
  }
});