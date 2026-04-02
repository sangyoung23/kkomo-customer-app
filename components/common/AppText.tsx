import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  children: React.ReactNode;
}

export default function AppText({ children, style, ...props }: Props) {
  return (
    <Text
      style={[
        {
          fontFamily: "Poppins_400Regular",
          color: "#111",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
