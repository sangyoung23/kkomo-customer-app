import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../common/AppText";
import ShopCard from "./ShopCard";

export default function NearbyShopSection() {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>근처 샵</AppText>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      >
        <ShopCard
          name="꼬모 애견미용"
          rating={4.8}
          distance="0.5km"
          image="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7"
        />

        <ShopCard
          name="댕댕이 미용실"
          rating={4.7}
          distance="1.2km"
          image="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
        />

        <ShopCard
          name="펫살롱"
          rating={4.9}
          distance="2.1km"
          image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
        />
      </ScrollView>
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

  list: {
    marginTop: 16,
  },
});
