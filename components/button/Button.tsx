import React from "react";
import { Text, TouchableHighlight, ViewStyle } from "react-native";
import { styles } from "./Button.styles";
import { useRouter } from "expo-router";

interface ButtonProps {
  style?: ViewStyle | ViewStyle[];
}

const Button: React.FC<ButtonProps> = ({ style }) => {
  const router = useRouter();

  return (
    <TouchableHighlight
      style={[styles.container, style]}
      onPress={() => router.back()}
    >
      <Text>Button</Text>
    </TouchableHighlight>
  );
};

export default Button;
