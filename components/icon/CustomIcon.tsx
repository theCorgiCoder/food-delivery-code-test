import React from "react";
import { View, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

interface IconProps {
  icon?: React.FC<SvgProps>;
  width?: number;
  height?: number;
  color?: string;
  style?: ViewStyle | ViewStyle[];
}

const CustomIcon: React.FC<IconProps> = ({
  icon: IconComponent,
  width,
  height,
  color,
  style,
}) => {
  return (
    <View style={style}>
      {IconComponent && (
        <IconComponent width={width} height={height} color={color} />
      )}
    </View>
  );
};

export default CustomIcon;
