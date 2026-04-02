import { StyleSheet, View } from "react-native";
import AppText from "../common/AppText";

export default function RecentReviewSection() {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>최근 리뷰</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
});
