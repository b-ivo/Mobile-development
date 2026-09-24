import { useState } from "react";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import Button from "./Button";
import ItemRow from "./ItemRow";

type Item = {
  id: string;
  name: string;
  completed: boolean;
};

export default function HomeScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const [text, setText] = useState<string>("");

  const addItem = () => {
    if (text.trim() === "") return;
    setItems([
      ...items,
      {
        id: Date.now().toString(),
        name: text.trim(),
        completed: false,
      },
    ]);
    setText("");
  };

  const toggleItem = (itemId: string) => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      }),
    );
  };

  const deleteItem = (itemToDelete: string) => {
    setItems(items.filter((item) => item.id !== itemToDelete));
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
      <FlatList<Item>
        keyExtractor={(item) => item.id}
        data={items}
        renderItem={({item}) => (
          <ItemRow item={item} onDelete={deleteItem} onToggle={toggleItem} />
        )}
        ListEmptyComponent={<Text>No items yet</Text>}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  itemRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
 

  completed: {
    fontSize: 18,
    textDecorationLine: "line-through",
  },
});
