import { Image, StyleSheet, View } from "react-native";

import { MOCK_SHOPS } from "@/data/mockShops";

import SectionHeading from "./SectionHeading";

export default function RecentReviewSection() {
  return (
    <View style={styles.container}>
      <SectionHeading>최근 리뷰</SectionHeading>

      <Image
        source={{ uri: MOCK_SHOPS[0].image }}
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
