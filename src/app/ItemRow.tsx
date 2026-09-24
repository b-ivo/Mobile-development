import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

type Item = {
  id: string;
  name: string;
  completed: boolean;
};

type ItemRowProps = {
  item: Item;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export default function ItemRow({ item, onDelete, onToggle }: ItemRowProps) {
  return (
    <View style={styles.row}>
      <Text style={item.completed ? styles.completed : styles.itemText}>
        {item.name}
      </Text>
      <Button
        title="Delete"
        onPress={() => {
          onDelete(item.id);
        }}
      />
      <Button
        title="Toggle"
        onPress={() => {
          onToggle(item.id);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 18,
    flex: 1,
    textAlignVertical: "center",
  },

  completed: {
    fontSize: 18,
    flex: 1,
    textDecorationLine: "line-through",
    textAlignVertical: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
});
