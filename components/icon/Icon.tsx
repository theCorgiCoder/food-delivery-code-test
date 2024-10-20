import React from "react";
import { View, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

interface IconProps {
  icon?: React.FC<SvgProps>;
  width?: number;
  height?: number;
  style?: ViewStyle | ViewStyle[];
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  width,
  height,
  style,
}) => {
  return (
    <View>
      {IconComponent && <IconComponent width={width} height={height} />}
    </View>
  );
};

export default Icon;
