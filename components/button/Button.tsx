import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./Button.styles";
import { SvgProps } from "react-native-svg";
import { View } from "react-native";

interface ButtonProps {
  icon?: React.FC<SvgProps>;
  style?: ViewStyle | ViewStyle[];
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, onPress, style }) => {
  return (
    <View>
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        {Icon && <Icon width={30} height={30} />}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
