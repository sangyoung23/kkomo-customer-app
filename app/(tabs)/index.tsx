import { ScrollView, StyleSheet } from "react-native";

import CategoryRow from "@/components/home/CategoryRow";
import NearbyShopSection from "@/components/home/NearbyShopSection";
import PopularShopSection from "@/components/home/PopularShopSection";
import RecentReviewSection from "@/components/home/RecentReviewSection";
import SearchBar from "@/components/home/SearchBar";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />

      <CategoryRow />

      <NearbyShopSection />

      <PopularShopSection />

      <RecentReviewSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
