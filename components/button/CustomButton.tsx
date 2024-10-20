import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./CustomButton.styles";
import { SvgProps } from "react-native-svg";
import { View } from "react-native";
import CustomIcon from "../icon/CustomIcon";

interface ButtonProps {
  icon?: React.FC<SvgProps>;
  width?: number;
  height?: number;
  style?: ViewStyle | ViewStyle[];
  onPress: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({
  icon: icon,
  width,
  height,
  onPress,
  style,
}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <CustomIcon icon={icon} width={width} height={height} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
