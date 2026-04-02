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

        {/* 거리 badge */}
        <View style={styles.distanceBadge}>
          <AppText style={styles.distanceText}>{distance}</AppText>
        </View>

        {/* 평점 badge */}
        <View style={styles.ratingBadge}>
          <AppText style={styles.ratingText}>⭐ {rating}</AppText>
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

  distanceBadge: {
    position: "absolute",
    top: 8,
    right: 8,

    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 3,

    borderRadius: 10,
  },

  distanceText: {
    fontSize: 11,
  },

  ratingBadge: {
    position: "absolute",
    bottom: 8,
    left: 8,

    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 3,

    borderRadius: 10,
  },

  ratingText: {
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
