import { StyleSheet, View } from "react-native";
import AppText from "../common/AppText";

interface Props {
  title: React.ReactNode;
}

export default function CategoryItem({ title }: Props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: "#F4F6F8",
    borderRadius: 20,
    marginRight: 10,
  },

  text: {
    fontSize: 13,
  },
});
