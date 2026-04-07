import { Image, StyleSheet, View } from "react-native";
import AppText from "../common/AppText";

interface Props {
  name: string;
  rating: number;
  reviewCount: number;
  distance: string;
  image: string;
}

export default function ShopCardHorizontal({
  name,
  rating,
  reviewCount,
  distance,
  image,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} />

        <View style={[styles.badge, styles.distanceBadge]}>
          <AppText style={styles.badgeText}>{distance}</AppText>
        </View>

        <View style={[styles.badge, styles.ratingBadge]}>
          <AppText style={styles.badgeText}>⭐ {rating}</AppText>
        </View>
      </View>

      <AppText style={styles.name}>{name}</AppText>

      <AppText style={styles.review}>리뷰 {reviewCount}개 · 애견미용</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 16,
  },

  imageWrapper: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 16,
  },

  badge: {
    position: "absolute",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },

  distanceBadge: {
    top: 8,
    right: 8,
  },

  ratingBadge: {
    bottom: 8,
    left: 8,
  },

  badgeText: {
    fontSize: 11,
  },

  name: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
  },

  review: {
    fontSize: 12,
    color: "#777",
  },
});
