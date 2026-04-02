import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#999" />

      <TextInput placeholder="매장을 검색해보세요" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F6F8",
    borderRadius: 18,
    paddingHorizontal: 14,
    height: 50,
  },

  input: {
    marginLeft: 10,
    flex: 1,
  },
});
