import { ScrollView, StyleSheet, View } from "react-native";

import { MOCK_SHOPS } from "@/data/mockShops";

import SectionHeading from "./SectionHeading";
import ShopCardHorizontal from "./ShopCardHorizontal";

export default function NearbyShopSection() {
  return (
    <View style={styles.container}>
      <SectionHeading style={styles.heading}>근처 샵</SectionHeading>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {MOCK_SHOPS.map((shop) => (
          <ShopCardHorizontal
            key={shop.id}
            name={shop.name}
            rating={shop.rating}
            reviewCount={shop.reviewCount}
            distance={shop.distance}
            image={shop.image}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  heading: {
    marginBottom: 10,
  },
});
