import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../common/AppText";
import ShopCardHorizontal from "./ShopCardHorizontal";

export default function NearbyShopSection() {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>근처 샵</AppText>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ShopCardHorizontal
          name="펫살롱 강남점"
          rating={4.9}
          reviewCount={32}
          distance="1.2km"
          image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
        />

        <ShopCardHorizontal
          name="댕댕이 미용실"
          rating={4.8}
          reviewCount={21}
          distance="2.0km"
          image="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
        />

        <ShopCardHorizontal
          name="꼬모 애견미용"
          rating={4.7}
          reviewCount={15}
          distance="2.8km"
          image="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7"
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
    marginBottom: 10,
  },
});
