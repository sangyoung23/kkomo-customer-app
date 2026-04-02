import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="매장을 검색해보세요" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  input: {
    height: 50,
    backgroundColor: "#F3F3F3",
    borderRadius: 14,
    paddingHorizontal: 16,
  },
});
