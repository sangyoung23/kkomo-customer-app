import { StyleSheet, type StyleProp, type TextStyle } from "react-native";

import AppText from "../common/AppText";

type Props = {
  children: string;
  style?: StyleProp<TextStyle>;
};

export default function SectionHeading({ children, style }: Props) {
  return <AppText style={[styles.title, style]}>{children}</AppText>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
});
