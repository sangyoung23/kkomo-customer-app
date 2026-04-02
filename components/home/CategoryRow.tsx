import { ScrollView, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";

export default function CategoryRow() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <CategoryItem title="전체" />
      <CategoryItem title="미용" />
      <CategoryItem title="목욕" />
      <CategoryItem title="호텔" />
      <CategoryItem title="산책" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
