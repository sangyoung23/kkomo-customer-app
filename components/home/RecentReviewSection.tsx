import { Image, StyleSheet, View } from "react-native";
import AppTitle from "../common/AppTitle";

export default function RecentReviewSection() {
  return (
    <View style={styles.container}>
      <AppTitle>최근 리뷰</AppTitle>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  image: {
    marginTop: 14,
    height: 150,
    borderRadius: 20,
  },
});
