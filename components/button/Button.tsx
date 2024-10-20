import React from "react";
import { Text, TouchableHighlight, ViewStyle } from "react-native";
import { styles } from "./Button.styles";

interface ButtonProps {
  icon: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
}

const Button: React.FC<ButtonProps> = ({ icon, onPress, style }) => {
  return (
    <TouchableHighlight style={[styles.container, style]} onPress={onPress}>
      <Text>Button</Text>
    </TouchableHighlight>
  );
};

export default Button;
