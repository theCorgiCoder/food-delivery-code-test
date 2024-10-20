import React from "react";
import { View } from "react-native";
import CustomIcon from "../icon/CustomIcon";
import { styles } from "./Clock.styles";
import { SvgProps } from "react-native-svg";
import CustomText from "../customText/CustomText";

interface ClockProps {
  icon?: React.FC<SvgProps>;
  textStyle: string;
  time: string;
  width: number;
  height: number;
  iconColor?: string;
  textColor: string;
}

const Clock: React.FC<ClockProps> = ({
  icon,
  width,
  height,
  textStyle,
  iconColor,
  textColor,
  time,
}) => {
  return (
    <View style={styles.container}>
      <CustomIcon icon={icon} width={width} height={height} color={iconColor} />
      <CustomText title={textStyle} color={textColor} content={time} />
    </View>
  );
};

export default Clock;
