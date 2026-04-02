import { Image, StyleSheet, View } from "react-native";
import AppText from "../common/AppText";

interface Props {
  name: string;
  rating: number;
  distance: string;
  image: string;
}

export default function ShopCard({ name, rating, distance, image }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.info}>
        <AppText style={styles.name}>{name}</AppText>

        <View style={styles.meta}>
          <AppText style={styles.rating}>⭐ {rating}</AppText>
          <AppText style={styles.distance}>{distance}</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    marginRight: 16,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 16,
  },

  info: {
    marginTop: 8,
  },

  name: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },

  meta: {
    flexDirection: "row",
    marginTop: 4,
  },

  rating: {
    fontSize: 12,
    marginRight: 8,
  },

  distance: {
    fontSize: 12,
    color: "#777",
  },
});
