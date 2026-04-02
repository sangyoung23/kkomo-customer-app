import { Image, StyleSheet, View } from "react-native";
import AppText from "../common/AppText";

interface Props {
  name: string;
  rating: number;
  distance: string;
  image: string;
}

export default function ShopCardVertical({
  name,
  rating,
  distance,
  image,
}: Props) {
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
    marginTop: 16,
    backgroundColor: "#fff",
    borderRadius: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 3,
  },

  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },

  info: {
    padding: 14,
  },

  name: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },

  meta: {
    flexDirection: "row",
    marginTop: 6,
  },

  rating: {
    fontSize: 13,
    marginRight: 10,
  },

  distance: {
    fontSize: 13,
    color: "#777",
  },
});
