import React from "react";
import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  children: React.ReactNode;
}

export default function AppTitle({ children, style, ...props }: Props) {
  return (
    <Text
      style={[
        {
          fontFamily: "Poppins_600SemiBold",
          fontSize: 22,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
