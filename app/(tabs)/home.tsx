import NearbyShopSection from "@/components/home/NearbyShopSection";
import PopularShopSection from "@/components/home/PopularShopSection";
import RecentReviewSection from "@/components/home/RecentReviewSection";
import SearchBar from "@/components/home/SearchBar";
import { ScrollView, StyleSheet } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />

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
